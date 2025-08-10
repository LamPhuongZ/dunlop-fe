import React, { useState, useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
const steps = ['Chọn thương hiệu', 'Chọn model', 'Chọn năm sản xuất'];

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

const MODEL_NAMES: Record<string, string[]> = {
  Dunlop: ['SP Sport Maxx', 'Direzza DZ102', 'Grandtrek AT25'],
  BMW: ['3 Series', '5 Series', 'X5'],
  Audi: ['A3', 'A4', 'Q7'],
  Mercedes: ['C-Class', 'E-Class', 'S-Class'],
  Porsche: ['911', 'Cayenne', 'Panamera'],
  Toyota: ['Camry', 'Corolla', 'RAV4'],
  Honda: ['Civic', 'Accord', 'CR-V'],
  Nissan: ['Altima', 'Sentra', 'Rogue'],
  Ford: ['Mustang', 'F-150', 'Explorer'],
  Chevrolet: ['Camaro', 'Silverado', 'Equinox'],
};

const YEARS = Array.from({ length: 26 }, (_, i) => (2025 - i).toString());

export default function SearchModal() {
  const [activeStep, setActiveStep] = useState(0);
  const [brand, setBrand] = useState<string>('');
  const [model, setModel] = useState<string>('');
  const [year, setYear] = useState<string>('');

  const handleBrandChange = (value: string) => {
    setBrand(value === 'none' ? '' : value);
  };

  const handleModelChange = (value: string) => {
    setModel(value === 'none' ? '' : value);
  };

  const handleYearChange = (value: string) => {
    setYear(value === 'none' ? '' : value);
  };

  const handleReset = () => {
    setBrand('');
    setModel('');
    setYear('');
    setActiveStep(0);
  };

  useEffect(() => {
    if (activeStep === 0 && brand) {
      setActiveStep(1);
    } else if (activeStep === 1 && model) {
      setActiveStep(2);
    }
  }, [brand, model, year, activeStep]);

  return (
    <div className="flex items-start p-4">
      {/* Stepper */}
      <div className="flex flex-col mt-3 items-center mr-6">
        {steps.map((_, index) => (
          <div key={index} className="relative mb-20 last:mb-0">
            <button
              className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
                activeStep >= index ? 'bg-black' : 'bg-gray-300'
              }`}>
              {index + 1}
            </button>
            {index < steps.length - 1 && (
              <div
                className={`absolute left-1/2 top-10 w-0.5 h-16 transform -translate-x-1/2 transition-all duration-300 ${
                  activeStep <= index ? 'bg-gray-300' : 'bg-black'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 space-y-12 min-w-80">
        {/* Brand Selection */}
        <div>
          <label
            htmlFor="brand-select"
            className="block text-sm font-medium text-gray-700 mb-1">
            Thương hiệu
          </label>
          <Select value={brand} onValueChange={handleBrandChange}>
            <SelectTrigger
              id="brand-select"
              className="w-full rounded-md border-gray-300 focus:ring-2 focus:ring-black">
              <SelectValue placeholder="Chọn thương hiệu" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">
                <em>Chọn thương hiệu</em>
              </SelectItem>
              {BRAND_NAMES.map(brandName => (
                <SelectItem key={brandName} value={brandName}>
                  {brandName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Model Selection */}
        <div>
          <label
            htmlFor="model-select"
            className="block text-sm font-medium text-gray-700 mb-1">
            Model
          </label>
          <Select
            value={model}
            onValueChange={handleModelChange}
            disabled={!brand}>
            <SelectTrigger
              id="model-select"
              className="w-full rounded-md border-gray-300 focus:ring-2 focus:ring-black">
              <SelectValue placeholder="Chọn model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">
                <em>Chọn model</em>
              </SelectItem>
              {brand &&
                MODEL_NAMES[brand]?.map(modelName => (
                  <SelectItem key={modelName} value={modelName}>
                    {modelName}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>

        {/* Year Selection */}
        <div>
          <label
            htmlFor="year-select"
            className="block text-sm font-medium text-gray-700 mb-1">
            Năm sản xuất
          </label>
          <Select
            value={year}
            onValueChange={handleYearChange}
            disabled={!model}>
            <SelectTrigger
              id="year-select"
              className="w-full rounded-md border-gray-300 focus:ring-2 focus:ring-black">
              <SelectValue placeholder="Chọn năm sản xuất" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">
                <em>Chọn năm sản xuất</em>
              </SelectItem>
              {YEARS.map(yearValue => (
                <SelectItem key={yearValue} value={yearValue}>
                  {yearValue}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Completion Message */}
        {activeStep === steps.length - 1 && brand && model && year && (
          <div className="text-center mt-6">
            <p className="mb-4 text-lg text-gray-800">
              Hoàn tất! Bạn đã chọn: {brand}, {model}, {year}
            </p>

            <Button className="button-onclick">Tìm kiếm</Button>
          </div>
        )}
      </div>
    </div>
  );
}
