'use client';

interface StepIndicatorProps {
  step: number;
  totalSteps: number;
}

export default function StepIndicator({
  step,
  totalSteps,
}: StepIndicatorProps) {
  return (
    <div className="flex mb-6">
      {Array.from({ length: totalSteps }, (_, i) => {
        const index = i + 1;
        const isActive = index <= step;
        return (
          <div key={index} className="flex items-center">
            <div
              className={`w-9 h-9 rounded-full border-2 flex items-center justify-center 
                ${isActive ? 'bg-dunlop-black border-dunlop-black text-white' : 'bg-white border-gray-300 text-gray-300'}`}>
              <span className="font-bold">{index}</span>
            </div>
            {index < totalSteps && (
              <div
                className={`w-8 h-0.5 mx-3 ${
                  index < step ? 'bg-dunlop-black' : 'bg-gray-300'
                }`}></div>
            )}
          </div>
        );
      })}
    </div>
  );
}
