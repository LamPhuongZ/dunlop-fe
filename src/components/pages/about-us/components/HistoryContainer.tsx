import Image from 'next/image';
import React from 'react';

const HistoryContainer = ({
  title,
  desc,
  imgUrl,
  alt,
}: {
  title?: string;
  desc?: string;
  imgUrl?: string;
  alt?: string;
}) => {
  return (
    <div
      className="relative p-[5px] w-full md:max-w-[550px] md:w-1/2 h-[230px] bg-about-us-dark-blue shadow shadow-about-us-dark-blue
              [--cut:30px] 
              [clip-path:polygon(var(--cut)_0,100%_0,100%_calc(100%-var(--cut)),calc(100%-var(--cut))_100%,0_100%,0_var(--cut))]">
      <div
        className="relative z-10 h-full p-6 md:p-10 bg-about-us-background border border-about-us-dark-blue
                [clip-path:polygon(var(--cut)_0,100%_0,100%_calc(100%-var(--cut)),calc(100%-var(--cut))_100%,0_100%,0_var(--cut))]"
        style={
          imgUrl
            ? {
                border: '1px solid #f0f0f0',
                backgroundImage: `url(${imgUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }
            : {}
        }>
        {title && (
          <>
            <div className="text-2xl font-bold text-center mb-3">{title}</div>
            <p className="text-gray-900 leading-relaxed">{desc}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default HistoryContainer;
