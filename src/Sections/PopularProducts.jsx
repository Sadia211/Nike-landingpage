import React from 'react'
import { products } from '../Constants'
import PopularProductCard from '../Components/PopularProductCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>
          Our <span className='text-coral-red'>Popular</span> Products
        </h2>
        <p className='lg:max-w-lg mt-2 font-monsterrat text-slate-gray mb-2'>
          Experience top-notch quality and style with our sought-after selections.
          Discover a world of comfort, design, and value.
        </p>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-16 mb-2"
      >
        {products.map((product) => (
          <SwiperSlide key={product.name}>
            <PopularProductCard {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default PopularProducts
