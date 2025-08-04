'use client';

import { Modal, Box, Typography, Button, Input } from '@mui/material';
import React, { ChangeEvent, useState } from 'react';
import { Search, X } from 'lucide-react';
import Image from 'next/image';
import ProductTypeButtons from './ProductTypeButtons/ProductTypeButtons';
import HorizontalStepper from './Stepper/HorizontalStepper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

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

  const handleChange = (event: SelectChangeEvent) => {
    setBrand(event.target.value);
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

      {/* MUI Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="product-modal-title"
        aria-describedby="product-modal-description">
        <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-[40px] bg-white rounded-lg shadow-2xl text-black flex flex-col items-center gap-10 min-w-2/3">
          <div className="flex gap-10 item-center font-2xl mt-10">
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
            <HorizontalStepper />
          </div>
          <button
            onClick={handleClose}
            className="p-1 rounded-full border-3 border-black hover:rotate-[90deg] transition-transform duration-300 absolute top-8 right-8">
            <X className="stroke-[3]" />
          </button>
        </Box>
      </Modal>
    </section>
  );
};

export default HeroSection;
