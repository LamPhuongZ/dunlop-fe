// components/Footer.tsx
import React from 'react';
import {
  Facebook,
  Phone,
  MapPin,
  Youtube,
  Send,
  Mail,
  MessageCircle,
  Music,
} from 'lucide-react';

import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-gray-200 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Contact Form */}
        <div>
          <div className="mb-4">
            <img
              src="/svgs/dunlop-logo-white.svg"
              alt="Dunlop Logo"
              className="h-8"
            />
            <p className="text-xs italic">Drive With Confidence</p>
          </div>
          <p className="mb-2">Leave contact</p>
          <div className="flex items-center gap-2 bg-about-us-background border border-about-us-dark-blue rounded-md p-2">
            <input
              type="text"
              placeholder="Email or Phone"
              className="px-3 py-2 text-sm rounded-md w-full text-black placeholder:text-neutral-500 outline-none"
            />
            <Button className="bg-about-us-black text-white px-3 py-2 text-sm font-semibold rounded-md flex items-center gap-1">
              <Send size={14} /> SEND
            </Button>
          </div>
        </div>

        {/* Menu */}
        <div className="space-y-2">
          <h4 className="font-semibold">Home</h4>
          <ul className="space-y-1 text-gray-400">
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Warranty Information</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
          </ul>
        </div>

        {/* Policies */}
        <div className="space-y-2">
          <h4 className="font-semibold invisible md:visible">
            Terms & Inspection
          </h4>
          <ul className="space-y-1 text-gray-400">
            <li>
              <a href="#">Terms and Policies</a>
            </li>
            <li>
              <a href="#">Inspection Guide</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-2">Contact us</h4>
          <div className="flex gap-3 mb-3 text-lg">
            <a href="#">
              <Icon icon="gg:facebook" width="20" height="20" />
            </a>
            <a href="#">
              <Icon icon="akar-icons:tiktok-fill" width="20" height="20" />
            </a>
            <a href="#">
              <Icon icon="file-icons:telegram" width="20" height="20" />
            </a>
            <a href="#">
              <Icon icon="iconoir:youtube-solid" width="20" height="20" />
            </a>
          </div>
          <p className="flex items-center gap-2 text-gray-300 text-sm">
            <Icon icon="solar:phone-bold" width="20" height="20" /> 028 3831
            0239
          </p>
        </div>
      </div>

      {/* Address */}
      <div className="max-w-7xl mx-auto px-6 space-y-1 text-gray-400 text-xs">
        <p className="flex items-center gap-2">
          <MapPin size={14} /> 190 Sai Dong, Long Bien District, Hanoi, Vietnam
        </p>
        <p className="flex items-center gap-2">
          <MapPin size={14} /> 87 Phu Chau, KP Binh Duong 3, An Binh Ward, Di An
          City, Binh Duong Province, Vietnam
        </p>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-6 py-4 text-center text-xs text-gray-400">
        Dunlop Tyre © 2025. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
