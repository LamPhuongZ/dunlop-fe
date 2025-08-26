'use client';
import { UseFormRegister } from 'react-hook-form';

interface FormData {
  otp: string;
}

interface InputOtpProps {
  register: UseFormRegister<FormData>;
  index: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputOtp({ register, index, onChange }: InputOtpProps) {
  return (
    <input
      type="text"
      {...register('otp')}
      onChange={onChange}
      className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
      pattern="\d*"
      maxLength={1}
    />
  );
}
