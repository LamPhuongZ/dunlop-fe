import React from 'react';
import './index.css';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
const DunlopTypeSection = () => {
  return (
    <div className="max-w-4/5 mt-10 mx-auto">
      <div className="parent">
        <div className="div4 flex flex-col gap-4 max-w-[435px] justify-center">
          <h3 className="uppercase text-[52px] font-extrabold leading-14">
            Dunlop <span className="text-[#FD0]">tyre</span>
          </h3>
          <p className="text-xl">
            <strong>Một thương hiệu lốp xe</strong> hàng đầu thế giới từ Anh với
            hơn <strong>130 năm kinh nghiệm.</strong>
          </p>
          <a
            href="#"
            className="text-black font-bold px-10 py-3 rounded-2xl text-center bg-[#FD0] uppercase hover:shadow-lg transition-shadow duration-300">
            Xem thêm
          </a>
        </div>
        <div className="div5">
          <Image
            className="rounded-2xl object-cover"
            src="/images/intro-1.png"
            alt="intro image"
            width={435}
            height={424}
          />
        </div>
        <div className="div3">
          <Image
            className="rounded-2xl object-fill"
            src="/images/intro-6.png"
            alt="intro image"
            width={435}
            height={424}
          />
        </div>
        <div className="div1">
          <Image
            className="rounded-2xl"
            src="/images/intro-2.png"
            alt="intro image"
            width={435}
            height={424}
          />
        </div>
        <div className="div2">
          <Image
            className="rounded-2xl object-cover"
            src="/images/intro-3.png"
            alt="intro image"
            width={435}
            height={424}
          />
        </div>
        <div className="div6">
          <Image
            className="rounded-2xl"
            src="/images/intro-5.png"
            alt="intro image"
            width={435}
            height={424}
          />
        </div>
      </div>
    </div>
  );
};

export default DunlopTypeSection;
