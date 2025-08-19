'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import InputOtp from './InputOTP';
import { schema } from '@/schema/OTPSchema';

interface FormData {
  otp: string;
}

export default function Step3() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      otp: '',
    },
  });

  const otpValue = watch('otp') || '';

  const handleInputChange = (index: number, value: string) => {
    if (/^\d?$/.test(value)) {
      const newOtp = otpValue.padEnd(6, ' ').split('');
      newOtp[index] = value;
      setValue('otp', newOtp.join('').trim(), { shouldValidate: true });
    }
  };

  const onSubmit = async (data: FormData) => {
    console.log('OTP Submitted:', data.otp);
  };

  return (
    <div>
      <header className="mb-2 mx-auto text-center">
        <h3 className="text-2xl font-bold mb-1 uppercase">Nhập mã xác thực</h3>
        <p className="text-[14px] text-slate-500">
          Nhập mã OTP đã được gửi đến email của bạn.
        </p>
      </header>
      <div className="max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10">
        <form id="otp-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center justify-center gap-3">
            {Array.from({ length: 6 }, (_, index) => (
              <InputOtp
                key={index}
                register={register}
                index={index}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(index, e.target.value)
                }
              />
            ))}
          </div>
          {errors.otp && (
            <p className="text-red-500 text-sm mt-2">{errors.otp.message}</p>
          )}
        </form>
        <div className="text-sm text-slate-500 mt-4">
          Chưa nhận được mã?{' '}
          <a
            className="font-medium text-dunlop-black hover:text-dunlop-gray cursor-pointer transition-all duration-300 underline"
            href="#0">
            Gửi lại
          </a>
        </div>
      </div>
    </div>
  );
}
