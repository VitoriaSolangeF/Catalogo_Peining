import React, {useState} from "react";
import { register } from 'swiper/element/bundle'
import Image3 from './../../assets/bannerEntregas.png'
import Image4 from './../../assets/bannerZap.png'

import { Swiper, SwiperSlide } from "swiper/react";

import './Infor.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

register();

function Infor () {

const InforBanner = [
    {id: '3', image: Image3 },
    {id: '4', image: Image4 }
];

return (
    <div className="container_infor">

      <Swiper
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      >
        {InforBanner.map( (item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="Slider" className="slide-infor"/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Infor;
