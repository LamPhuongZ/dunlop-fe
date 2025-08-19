'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import StepIndicator from './StepIndicator';
import ActionButton from './ActionButton';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import { UserFormData } from '@/types/Step1';

export default function StepProgress() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserFormData>();

  const stepsContent = [
    <Step1 key="step1" register={register} errors={errors} watch={watch} />,
    <Step2 key="step2" register={register} errors={errors} watch={watch} />,
    <Step3 key="step3" />,
  ];

  const changeStep = (direction: 'next' | 'prev') => {
    setStep(prev =>
      direction === 'next'
        ? Math.min(prev + 1, totalSteps)
        : Math.max(prev - 1, 1)
    );
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <StepIndicator step={step} totalSteps={totalSteps} />

      <div className="flex-1 flex items-center justify-center mb-4 w-full">
        <div className="w-full">{stepsContent[step - 1]}</div>
      </div>

      <div className="flex space-x-3 mb-4 w-full">
        {step > 1 && (
          <ActionButton
            label="Quay lại"
            onClick={() => changeStep('prev')}
            variant="back"
          />
        )}
        {step < totalSteps ? (
          <ActionButton label="Tiếp theo" onClick={() => changeStep('next')} />
        ) : (
          <ActionButton label="Hoàn thành" onClick={() => alert('Done!')} />
        )}
      </div>
    </div>
  );
}
