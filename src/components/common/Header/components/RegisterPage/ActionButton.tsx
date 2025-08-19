'use client';

interface ActionButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'next' | 'back';
}

export default function ActionButton({
  label,
  onClick,
  variant = 'next',
}: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-5 flex-1 py-2 rounded-md font-bold transition cursor-pointer
        ${
          variant === 'next'
            ? 'bg-dunlop-black text-white hover:bg-dunlop-gray uppercase'
            : 'bg-gray-200 text-gray-600 hover:bg-gray-300 uppercase'
        }`}>
      {label}
    </button>
  );
}
