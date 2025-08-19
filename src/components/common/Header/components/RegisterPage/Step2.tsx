'use client';
import { UseFormRegister, FieldErrors, UseFormWatch } from 'react-hook-form';
import { UserFormData } from '@/types/Step1';

interface Step2Props {
  register: UseFormRegister<UserFormData>;
  errors: FieldErrors<UserFormData>;
  watch: UseFormWatch<UserFormData>;
}

export default function Step2({ register, errors }: Step2Props) {
  return (
    <div>
      <label className="block mb-2">Tên công ty</label>
      <input
        {...register('companyName', { required: 'Tên công ty là bắt buộc' })}
        placeholder="Nhập tên công ty"
        className="w-full border rounded-md px-3 py-2 mb-3"
      />
      {errors.companyName && (
        <p className="text-red-500 text-sm">{errors.companyName.message}</p>
      )}
      <label className="block mb-2">Mã số thuế</label>
      <input
        {...register('taxCode', { required: 'Mã số thuế là bắt buộc' })}
        placeholder="Nhập mã số thuế"
        className="w-full border rounded-md px-3 py-2 mb-3"
      />
      {errors.taxCode && (
        <p className="text-red-500 text-sm">{errors.taxCode.message}</p>
      )}
      <label className="block mb-2">Địa chỉ</label>
      <input
        {...register('address', { required: 'Địa chỉ là bắt buộc' })}
        placeholder="Nhập địa chỉ"
        className="w-full border rounded-md px-3 py-2 mb-3"
      />
      {errors.address && (
        <p className="text-red-500 text-sm">{errors.address.message}</p>
      )}
    </div>
  );
}
