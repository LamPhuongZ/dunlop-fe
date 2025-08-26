'use client';
import { useState } from 'react';
import { UseFormRegister, FieldErrors, UseFormWatch } from 'react-hook-form';
import { UserFormData } from '@/types/Step1';

interface Step1Props {
  register: UseFormRegister<UserFormData>;
  errors: FieldErrors<UserFormData>;
  watch: UseFormWatch<UserFormData>;
}

export default function Step1({ register, errors, watch }: Step1Props) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="w-full">
      <label className="block mb-2">Tên tài khoản</label>
      <input
        {...register('username', { required: 'Tên tài khoản là bắt buộc' })}
        placeholder="Nhập tên tài khoản"
        className="w-full border rounded-md px-3 py-2 mb-3"
      />
      {errors.username && (
        <p className="text-red-500 text-sm">{errors.username.message}</p>
      )}
      <label className="block mb-2">Email</label>
      <input
        {...register('email', {
          required: 'Email là bắt buộc',
          pattern: { value: /^\S+@\S+$/i, message: 'Email không hợp lệ' },
        })}
        placeholder="Nhập email"
        className="w-full border rounded-md px-3 py-2 mb-3"
      />
      {errors.email && (
        <p className="text-red-500 text-sm">{errors.email.message}</p>
      )}
      <label className="block mb-2">Số điện thoại</label>
      <input
        {...register('phone', { required: 'Số điện thoại là bắt buộc' })}
        placeholder="Nhập số điện thoại"
        className="w-full border rounded-md px-3 py-2 mb-3"
      />
      {errors.phone && (
        <p className="text-red-500 text-sm">{errors.phone.message}</p>
      )}
      <label className="block mb-2">Mật khẩu</label>
      <div className="relative mb-3">
        <input
          type={showPassword ? 'text' : 'password'}
          {...register('password', { required: 'Mật khẩu là bắt buộc' })}
          placeholder="Nhập mật khẩu"
          className="w-full border rounded-md px-3 py-2"
        />
        <button
          type="button"
          className="absolute right-3 top-2 text-gray-500 cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24">
            <g
              className="pulsing-circle"
              fill="none"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2">
              <circle cx="12" cy="12" r="3" />
              <path d="M1 12q11 16 22 0Q12-4 1 12" />
              {showPassword && <path d="m4 4l16 16" />}
            </g>
          </svg>
        </button>
      </div>
      {errors.password && (
        <p className="text-red-500 text-sm">{errors.password.message}</p>
      )}
      <label className="block mb-2">Xác nhận mật khẩu</label>
      <div className="relative mb-3">
        <input
          type={showConfirmPassword ? 'text' : 'password'}
          {...register('confirmPassword', {
            required: 'Xác nhận mật khẩu là bắt buộc',
            validate: value =>
              value === watch('password') || 'Mật khẩu không khớp',
          })}
          placeholder="Nhập lại mật khẩu"
          className="w-full border rounded-md px-3 py-2"
        />
        <button
          type="button"
          className="absolute right-3 top-2 text-gray-500 transition-all duration-300 cursor-pointer"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24">
            <g
              className="pulsing-circle"
              fill="none"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2">
              <circle cx="12" cy="12" r="3" />
              <path d="M1 12q11 16 22 0Q12-4 1 12" />
              {showConfirmPassword && <path d="m4 4l16 16" />}
            </g>
          </svg>
        </button>
      </div>
      {errors.confirmPassword && (
        <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
      )}
    </div>
  );
}
