import { NextRequest, NextResponse } from 'next/server';
import { jwtDecode } from 'jwt-decode';

const authenticatedPaths = ['/admin', '/profile', '/cart', '/checkout'];
const guestOnlyPaths = ['/admin/login', '/admin/register'];

interface JwtPayload {
    exp: number;
}

export default function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value;
    const { pathname } = request.nextUrl;

    // Guest only
    if (guestOnlyPaths.some((p) => pathname.startsWith(p))) {
        if (token) return NextResponse.redirect(new URL('/admin/dashboard', request.url));
        return NextResponse.next();
    }

    // Auth required
    if (authenticatedPaths.some((p) => pathname.startsWith(p))) {
        if (!token) return NextResponse.redirect(new URL('/admin/login', request.url));

        try {
            const decoded = jwtDecode<JwtPayload>(token);
            if (decoded.exp < Date.now() / 1000) {
                const res = NextResponse.redirect(new URL('/admin/login', request.url));
                res.cookies.delete('token');
                return res;
            }
        } catch {
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!_next|favicon.ico).*)'], // tránh ảnh hưởng assets
};
