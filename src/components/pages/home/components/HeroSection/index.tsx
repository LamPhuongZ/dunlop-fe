'use client';

import React, { ChangeEvent, useState } from 'react';
import { Search, X } from 'lucide-react';
import Image from 'next/image';
import ProductTypeButtons from './ProductTypeButtons/ProductTypeButtons';
import SearchModal from './SearchModal/SearchModal';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
const HERO_PRODUCTS = [
  {
    src: '/images/tire.png',
    alt: 'Tire',
    content: 'Lốp ô tô',
    onClick: () => {},
  },
  {
    src: '/images/wheel.png',
    alt: 'Wheel',
    content: 'Lốp xe máy',
    onClick: () => {},
  },
  {
    src: '/images/rim.png',
    alt: 'Rim',
    content: 'Mâm ô tô',
    onClick: () => {},
  },
];

const BRAND_NAMES = [
  'Dunlop',
  'BMW',
  'Audi',
  'Mercedes',
  'Porsche',
  'Toyota',
  'Honda',
  'Nissan',
  'Ford',
  'Chevrolet',
];

const HeroSection = () => {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [brand, setBrand] = useState<string | null>(null);

  const handleOpen = (content: string) => {
    setSelectedProduct(content);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section
      id="hero"
      className='min-h-[800px] max-w-[1920px] bg-[url("/assets/images/hero-bg.png")] duration-300 transition-all ease-in-out
       bg-cover bg-center flex items-center justify-center relative'
      style={{ backgroundImage: `url("/images/hero-img.png")` }}>
      <div className="absolute top-[200px] left-[100px] text-white">
        <Image
          src="/images/hero-text.png"
          alt="hero-text"
          width={800}
          height={500}
        />
        <div className="mt-10 flex items-center gap-4 border border-transparent hover:border-white rounded-full p-4 bg-opacity-50">
          <Search />
          <input
            type="text"
            className="text-2xl text-white w-full outline-none bg-transparent placeholder:text-white"
            placeholder="Chọn loại sản phẩm bạn muốn tìm kiếm"
          />
        </div>
        <div className="flex gap-10 md:gap-6 sm:gap-4 item-center font-2xl mt-10">
          {HERO_PRODUCTS.map((product, index) => (
            <ProductTypeButtons
              key={index}
              {...product}
              onClick={() => handleOpen(product.content)}
            />
          ))}
        </div>
      </div>

      {/* Pop up content */}
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="[&>button:last-child]:hidden p-10 bg-white rounded-lg shadow-2xl text-black flex flex-col items-center gap-10 !max-w-[900px]">
          <DialogHeader className="sr-only">
            <DialogTitle id="product-modal-title">
              Product Selection
            </DialogTitle>
          </DialogHeader>

          <div className="flex gap-10 text-2xl mt-10">
            {HERO_PRODUCTS.map((product, index) => (
              <ProductTypeButtons
                key={index}
                {...product}
                className="text-[#231F20]"
                imageClassName={`${selectedProduct === product.content ? 'border-[#231F20]' : ''}`}
                onClick={() => handleOpen(product.content)}
              />
            ))}
          </div>

          <div className="mt-[60px] border-2 border-[#000] rounded-[20px] flex justify-center items-center p-10 gap-8">
            <SearchModal />
          </div>

          <button
            onClick={handleClose}
            className="p-1 rounded-full border-3 border-black hover:rotate-[90deg] transition-transform duration-300 absolute top-8 right-8">
            <X className="stroke-[3]" />
          </button>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;
