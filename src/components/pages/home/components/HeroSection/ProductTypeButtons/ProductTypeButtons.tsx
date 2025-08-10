import Image from 'next/image';
import React from 'react';

interface ProductTypeButtonProps {
  src: string;
  alt: string;
  content: string;
  onClick?: () => void;
  className?: string;
  imageClassName?: string;
}

const ProductTypeButtons = ({
  src,
  alt,
  onClick,
  content,
  className = '',
  imageClassName = '',
}: ProductTypeButtonProps) => {
  return (
    <button
      onClick={onClick}
      aria-label={content}
      className="button-onclick flex flex-col items-center gap-2 pt-0 px-4 pb-4 rounded-lg transition-shadow duration-300">
      <Image
        src={src}
        alt={alt}
        width={90}
        height={90}
        loading="lazy"
        className={`border-2 rounded-[8px]  border-[#A4A4A4] hover:border-[#231F20] ${imageClassName}`}
      />
      <span className={`text-xl ${className}`}>{content}</span>
    </button>
  );
};

export default ProductTypeButtons;
