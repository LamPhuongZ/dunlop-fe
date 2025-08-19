import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
const SignIn = ({ openRegister }: { openRegister: () => void }) => {
  return (
    <div>
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-center">
          Đăng nhập
        </DialogTitle>
        <DialogDescription className="text-center">
          Không có tài khoản?{' '}
          <a
            onClick={openRegister}
            className="underline text-dunlop-black font-medium cursor-pointer hover:text-dunlop-gray transition-all duration-300">
            Đăng ký ngay
          </a>
        </DialogDescription>
      </DialogHeader>

      <form className="space-y-4 mt-6">
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
          <div className="flex items-center space-x-2 ">
            <Checkbox id="save-password" />
            <Label htmlFor="save-password cursor-pointer">Ghi nhớ</Label>
          </div>
          <p className="underline text-dunlop-black font-medium cursor-pointer hover:text-dunlop-gray transition-all duration-300">
            Quên mật khẩu
          </p>
        </div>
      </form>
      <Button
        type="submit"
        className="w-full mt-4 bg-dunlop-yellow text-dunlop-black hover:shadow-2xl hover:bg-dunlop-gray uppercase active:text-[#979797] active:bg-[#BABABA] cursor-pointer">
        đăng nhập
      </Button>
    </div>
  );
};

export default SignIn;
