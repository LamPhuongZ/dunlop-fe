import React from 'react';

interface CarTypesProps {
  url: string;
  alt: string;
  type: string;
  selected: boolean;
  onClick?: () => void;
}
const CarTypes = ({ url, alt, type, selected, onClick }: CarTypesProps) => {
  return (
    <div className="cursor-pointer" onClick={onClick}>
      <div
        className={`${selected ? 'border-[#231F20]' : ''} border-2 rounded-2xl overflow-hidden w-[130px] h-[93px]`}>
        <img src={url} alt={alt} className="w-full h-full object-contain" />
      </div>
      <p
        className={`${selected ? 'font-bold' : ''} mt-2 text-center text-black`}>
        {type}
      </p>
    </div>
  );
};

export default CarTypes;
