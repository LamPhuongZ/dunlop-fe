import Image from 'next/image';
import React from 'react';

interface ProductTypeButtonsProps {
  src: string;
  altText: string;
  onClick?: () => void;
  content?: string;
}
const ProductTypeButtons = ({ src, altText, onClick, content }: ProductTypeButtonsProps) => {
  return (
    <button
      onClick={onClick}
      className="button-onclick flex flex-col items-center gap-2 text-white hover:text-blue-500 transition-colors duration-300"
    >
      <Image src={src} alt={altText} width={90} height={90} />
      <p className="text-[20px]">{content}</p>
    </button>
  );
};

export default ProductTypeButtons;
