import React from 'react';

const Journey = () => {
  return (
    <section id="about-us-journey" className="text-white">
      <div
        className="py-24 px-4 md:px-10 mx-auto min-h-[600px] relative bg-cover bg-right md:bg-center"
        style={{
          backgroundImage: `url(/images/journey-bg.png)`,
        }}>
        <div className="absolute top-1/2 left-1/2 md:top-3/5 md:left-1/4 -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-6xl font-bold leading-20 whitespace-nowrap">
            Dunlop tyre
          </h2>
          <p className="text-3xl max-w-[30ch]">
            Chinh phục mọi cung đường Từ thế giới đến{' '}
            <span className="font-bold">Việt Nam</span>
          </p>
        </div>
      </div>

      <div className="px-10 py-28 flex gap-10 bg-[#231F20] md:flex-row flex-col">
        <p className="text-3xl leading-14 flex-1 flex-center">
          Dunlop bắt đầu tại Belfast, Ireland năm 1888 với phát minh lốp hơi của
          J.B. Dunlop, mở ra kỷ nguyên mới cho ngành lốp xe...
        </p>
        <p className="text-3xl leading-14 font-semibold flex-1">
          Từ đường đua châu Âu đến các phòng thí nghiệm hiện đại tại Mỹ, Dunlop
          không ngừng phát triển suốt hơn 130 năm. Hãng là lựa chọn hàng đầu của
          nhiều thương hiệu xe danh tiếng như BMW, Audi, Porsche và
          Mercedes-Benz.
        </p>
      </div>
    </section>
  );
};

export default Journey;
