import Image from 'next/image';
import React from 'react';
const WhyUsData = [
  {
    url: '/images/whyus-1.png',
    title: 'Tiếp tục di chuyển ngay cả khi thủng lốp',
    desc: 'Công nghệ DSST (Dunlop Self Supporting Technology) giúp xe vẫn có thể chạy tối đa 80km với tốc độ 80km/h dù lốp mất toàn bộ áp suất.',
  },
  {
    url: '/images/whyus-2.png',
    title: 'Không cần lốp dự phòng',
    desc: 'Giúp tiết kiệm không gian trong xe, giảm trọng lượng tổng thể, từ đó tối ưu hóa hiệu suất, tiết kiệm nhiên liệu và giảm khí thải.',
  },
  {
    url: '/images/whyus-3.png',
    title: 'An toàn và kiểm soát tốt hơn',
    desc: 'Lốp run-flat của Dunlop giúp xe giữ được khả năng điều khiển khi bị thủng lốp, giảm nguy cơ mất lái, đặc biệt hữu ích trong các tình huống khẩn cấp.',
  },
  {
    url: '/images/whyus-4.png',
    title: 'Cải thiện hiệu suất và độ bền',
    desc: 'Lốp có cấu trúc gia cố đặc biệt giúp giảm biến dạng, giảm lực cản lăn và tăng hiệu quả tiêu thụ nhiên liệu.',
  },
];
const WhyUs = () => {
  return (
    <section className="py-36 px-24 bg-dunlop-yellow">
      <h3 className="text-5xl font-extrabold uppercase text-center text-dunlop-black tracking-tight">
        Vì sao nên chọn dunlop?
      </h3>
      <div className="grid grid-cols-4 gap-8 mt-20">
        {WhyUsData.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col items-center odd:mt-10 bg-dunlop-white even:bg-dunlop-black rounded-br-2xl rounded-t-2xl relative pb-10 h-fit">
            <div className="z-10 flex flex-col items-center gap-4 group-even:text-white group-odd:text-dunlop-black px-10">
              <Image
                src={item.url}
                alt={item.title}
                width={200}
                height={200}
                className="relative -top-10"
              />
              <h4 className="text-xl font-bold text-center">{item.title}</h4>
              <p className="text-left">{item.desc}</p>
            </div>
            <div className="w-1/3 h-[16px] absolute -bottom-[16px] left-0 right-0 rounded-b-2xl bg-dunlop-white group-even:bg-dunlop-black " />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
