import React from 'react';
import HistoryContainer from './HistoryContainer';
import './index.css';
``;
const Milestones = () => {
  const aboutData = [
    {
      title: '1992',
      desc: '1992 Tyre Pacific started our activities as a Commercial Company specialist in Tire and Accessories in Hong Kong. Tyre Pacific is a sole distributor of Dunlop Tires in China (Include Hong Kong and Macau).',
    },
    {
      imgUrl: '/images/about-us-1.png',
    },
    {
      title: '2004',
      desc: '2004 With Event that Sumitomo Rubber Industries (SRI) established the factory to produce Dunlop Tire in China, Tyre Pacific Company had cooperated with SRI to develop the market and Dunlop brand in China.',
    },
    {
      imgUrl: '/images/about-us-2.png',
    },
    {
      title: '2005',
      desc: 'Tyre Pacific was authorized by SRI to distribute as an exclusive distributor in Viet Nam, Laos and Cambodia. In Vietnam, Dunlop operates and approach to end-users through a Soles Agent of Tyre Pacific.',
    },
    {
      imgUrl: '/images/about-us-3.png',
    },
    {
      title: '2009',
      desc: '2009 Tyre Pacific had established the Representative Office in Ho Chi Minh City to support customers more.',
    },
    {
      imgUrl: '/images/about-us-4.png',
    },
    {
      title: '2012',
      desc: 'Tyre Pacific (Viet Nam) Co., Ltd has established to thanks and response to all customers that was supporting Dunlop Tires, as well as serving and developing Vietnam market better day by day.',
    },
    {
      imgUrl: '/images/about-us-5.png',
    },
  ];

  const pairedData = [];
  for (let i = 0; i < aboutData.length; i += 2) {
    pairedData.push(aboutData.slice(i, i + 2));
  }
  return (
    <section
      id="about-us-hero"
      className="py-24 px-10 bg-about-us-yellow text-dunlop-black font-inter">
      <header>
        <h1 className="text-center text-5xl leading-16 font-bold tracking-tighter">
          Tự hào Tyre Pacific
        </h1>
        <p className="text-center text-3xl font-bold tracking-tighter">
          Nhà phân phối độc quyền Dunlop
        </p>
      </header>
      <div className="history-container mt-20 space-y-20">
        {pairedData.map((pair, index) => (
          <div
            key={`pair-${index}`}
            className={`max-w-[1200px] mx-auto history-item relative flex flex-col justify-between md:flex-row gap-8 md:gap-32 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            {pair.map((item, subIndex) => (
              <HistoryContainer
                key={`history-${index}-${subIndex}`}
                {...item}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Milestones;
