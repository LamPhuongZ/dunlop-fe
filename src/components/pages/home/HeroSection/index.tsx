import React from 'react';
import { Search } from 'lucide-react';
import Image from 'next/image';
import ProductTypeButtons from './ProductTypeButtons/ProductTypeButtons/ProductTypeButtons';

const HeroSection = () => {
  return (
    <div
      className='min-h-[800px] bg-[url("/assets/images/hero-bg.png")] duration-300 transition-all ease-in-out
       bg-cover bg-center flex items-center justify-center'
      style={{ backgroundImage: `url("/images/hero-img.png")` }}
    >
      <div className="absolute top-[200px] left-[100px] text-white">
        <Image src="/images/hero-text.png" alt="hero-text" width={800} height={500} />
        <div className="mt-10 flex items-center gap-4 border border-transparent hover:border-white rounded-full p-4 bg-opacity-50">
          <Search />
          <input
            type="text"
            className="text-2xl text-white w-full outline-none bg-transparent placeholder:text-white"
            placeholder="Chọn loại sản phẩm bạn muốn tìm kiếm"
          />
        </div>
        <div className="flex gap-10 item-center font-2xl mt-10">
          <ProductTypeButtons src="/images/tire.png" altText="hero-text" content="Lốp ô tô" />
          <ProductTypeButtons src="/images/wheel.png" altText="hero-text" content="Lốp xe máy" />
          <ProductTypeButtons src="/images/rim.png" altText="hero-text" content="Mâm ô tô" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
