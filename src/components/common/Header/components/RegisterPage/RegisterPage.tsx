// app/register/page.tsx (Next.js 13+ App Router)
'use client';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import StepProgress from './StepProgress';

type FormData = {
  username: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

export default function RegisterPage({ openLogin }: { openLogin: () => void }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    // alert('Next step...');
  };

  return (
    <div className="min-w-3/4">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-center">
          Đăng ký
        </DialogTitle>
        <DialogDescription className="text-center">
          Đã có tài khoản?{' '}
          <a
            onClick={openLogin}
            className="underline text-dunlop-black font-medium cursor-pointer hover:text-dunlop-gray transition-all duration-300">
            Đăng nhập ngay
          </a>
        </DialogDescription>
      </DialogHeader>
      <div className="flex items-center justify-center mt-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white w-full text-sm">
          {/* Step indicator */}
          <StepProgress />
        </form>
      </div>
    </div>
  );
}
