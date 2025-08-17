import * as React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

const SignInDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="border-black button-onclick text-black font-semibold">
          Sign in
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Đăng nhập</DialogTitle>
          <DialogDescription>
            Không có tài khoản? Đăng ký ngay
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Nhập email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Mật khẩu</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              required
            />
          </div>
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="save-password" />
              <Label htmlFor="save-password">Ghi nhớ</Label>
            </div>
            <p className="underline text-dunlop-black font-medium">
              Quên mật khẩu
            </p>
          </div>
        </form>
        <Button
          type="submit"
          className="w-full bg-dunlop-yellow text-dunlop-black hover:shadow-2xl hover:bg-dunlop-gray uppercase active:text-[#979797] active:bg-[#BABABA]">
          đăng nhập
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default SignInDialog;
