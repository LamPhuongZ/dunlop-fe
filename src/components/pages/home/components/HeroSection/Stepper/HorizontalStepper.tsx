import React, { useState, useEffect } from 'react';
import {
  div,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  FormControl,
} from '@mui/material';

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

export default function HorizontalStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [brand, setBrand] = useState<string>('');
  const [model, setModel] = useState<string>('');
  const [year, setYear] = useState<string>('');

  const handleBrandChange = (event: SelectChangeEvent<string>) => {
    setBrand(event.target.value);
  };

  const handleModelChange = (event: SelectChangeEvent<string>) => {
    setModel(event.target.value);
  };

  const handleYearChange = (event: SelectChangeEvent<string>) => {
    setYear(event.target.value);
  };

  useEffect(() => {
    if (activeStep === 0 && brand) {
      setActiveStep(1);
    } else if (activeStep === 1 && model) {
      setActiveStep(2);
    } else if (activeStep === 2 && year) {
    }
  }, [brand, model, year, activeStep]);

  return (
    <div className="flex items-center p-4">
      <div className="flex flex-col items-center mr-6">
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
                className={`absolute left-1/2 top-10 w-0.5 h-16 transform -translate-x-1/2 transition-all duration-300 ${activeStep <= index ? 'bg-gray-300' : 'bg-black'}`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 space-y-12 min-w-80">
        <div>
          <FormControl className="w-full">
            <InputLabel id="brand-select-label">Thương hiệu</InputLabel>
            <Select
              labelId="brand-select-label"
              id="brand-select"
              value={brand}
              label="Thương hiệu"
              onChange={handleBrandChange}
              className="w-full rounded-md border-gray-300 focus:ring-2 focus:ring-black">
              <MenuItem value="">
                <em>Chọn thương hiệu</em>
              </MenuItem>
              {BRAND_NAMES.map(brandName => (
                <MenuItem key={brandName} value={brandName}>
                  {brandName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControl className="w-full">
            <InputLabel id="model-select-label">Model</InputLabel>
            <Select
              disabled={!brand}
              labelId="model-select-label"
              id="model-select"
              value={model}
              label="Model"
              onChange={handleModelChange}
              className="w-full rounded-md border-gray-300 focus:ring-2 focus:ring-black">
              <MenuItem value="">
                <em>Chọn model</em>
              </MenuItem>
              {brand &&
                MODEL_NAMES[brand]?.map(modelName => (
                  <MenuItem key={modelName} value={modelName}>
                    {modelName}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControl className="w-full">
            <InputLabel id="year-select-label">Năm sản xuất</InputLabel>
            <Select
              disabled={!model}
              labelId="year-select-label"
              id="year-select"
              value={year}
              label="Năm sản xuất"
              onChange={handleYearChange}
              className="w-full rounded-md border-gray-300 focus:ring-2 focus:ring-black">
              <MenuItem value="">
                <em>Chọn năm sản xuất</em>
              </MenuItem>
              {YEARS.map(yearValue => (
                <MenuItem key={yearValue} value={yearValue}>
                  {yearValue}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        {activeStep === steps.length && (
          <div className="text-center mt-6">
            <p className="mb-4 text-lg text-gray-800">
              Hoàn tất! Bạn đã chọn: {brand}, {model}, {year}
            </p>
            <button
              onClick={handleReset}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Làm lại
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
