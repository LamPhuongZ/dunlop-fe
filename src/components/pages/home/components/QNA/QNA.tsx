'use client';
import React, { useEffect, useRef, useState } from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import type { EmblaCarouselType } from 'embla-carousel';

const QnaData = [
  {
    title: 'What types of tires does Dunlop produce?',
    desc: 'Dunlop produces a wide range of tires, including passenger car tires, motorcycle tires, truck tires, and specialty tires for various applications.',
  },
  {
    title: 'How do I know which Dunlop tire is right for my vehicle?',
    desc: 'You can determine the right Dunlop tire for your vehicle by checking your owner’s manual, considering your driving conditions, and using Dunlop’s online tire selector tool for recommendations.',
  },
  {
    title: 'Where can I buy Dunlop tires?',
    desc: 'Dunlop tires are available at authorized dealers, tire retail stores, automotive service centers, and online marketplaces through official distributors.',
  },
  {
    title: 'Does Dunlop offer a warranty on their tires?',
    desc: 'Yes, Dunlop provides a limited warranty on most of their tires, covering manufacturing defects and, in some cases, treadwear for a specified mileage. Warranty terms vary by tire model and region.',
  },
  {
    title: 'How often should I check the tire pressure on my Dunlop tires?',
    desc: 'It is recommended to check your tire pressure at least once a month and before long trips, using a reliable tire pressure gauge to ensure optimal performance and safety.',
  },
  {
    title: 'Can I use Dunlop tires in winter or snowy conditions?',
    desc: 'Yes, Dunlop offers dedicated winter and all-season tires designed for improved grip, braking, and handling in snowy or icy conditions. Look for the snowflake symbol on the tire sidewall.',
  },
  {
    title: 'How do I properly maintain my Dunlop tires?',
    desc: 'To maintain your Dunlop tires, check tire pressure regularly, rotate them every 5,000–8,000 miles, balance and align your wheels as needed, and inspect for damage or uneven wear.',
  },
];

const QNA = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [api, setApi] = useState<EmblaCarouselType | undefined>(undefined);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  return (
    <section className="py-36 px-24 flex gap-10 justify-center">
      <Carousel
        opts={{ align: 'start', loop: true }}
        className="w-1/2"
        setApi={setApi}
        plugins={[Autoplay({ delay: 3000 })]}>
        <CarouselContent>
          <CarouselItem>
            <div className="relative w-full overflow-hidden rounded-lg max-h-[600px]">
              <img
                src="/images/qna.png"
                alt="qna image"
                className="object-cover h-full w-full"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative w-full h-full overflow-hidden rounded-lg max-h-[600px]">
              <img
                src="/images/qna-2.png"
                alt="qna image"
                className="object-cover h-full w-full"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      <div className="flex flex-col space-y-4 w-1/2">
        {QnaData.map((data, index) => (
          <Collapsible
            className={`border-2 px-4 py-2 rounded-md transition-all duration-300 ease-in-out ${openIndex === index ? 'border-black shadow-2xs shadow-gray-400' : ''}`}
            key={index}
            open={openIndex === index}
            onOpenChange={() =>
              setOpenIndex(openIndex === index ? null : index)
            }>
            <CollapsibleTrigger className="w-full">
              <div className="flex justify-between items-center py-4 ">
                <h3 className="text-lg font-semibold">{data.title}</h3>
                <button
                  className={`rounded-full shadow shadow-neutral-500 p-1 flex items-center justify-center ${
                    openIndex === index ? 'bg-[#231F20]' : 'bg-white'
                  }`}>
                  <Icon
                    icon="fa-solid:arrow-down"
                    width={14}
                    height={14}
                    className={`transition-transform duration-300 ${
                      openIndex === index
                        ? 'rotate-180 text-white'
                        : 'text-black'
                    }`}
                  />
                </button>
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <p className="py-4 text-[#707070 mt-8]">{data.desc}</p>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </section>
  );
};

export default QNA;
