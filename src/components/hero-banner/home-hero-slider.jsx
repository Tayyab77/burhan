'use client';
// external
import React, { useState } from "react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
// internal
import slider_img_1 from "@assets/img/slider/slider-img-1.png";
import slider_img_2 from "@assets/img/slider/slider-img-2.png";
import slider_img_3 from "@assets/img/slider/slider-img-3.png";
import shape_1 from "@assets/img/slider/shape/slider-shape-1.png";
import shape_2 from "@assets/img/slider/shape/slider-shape-2.png";
import shape_3 from "@assets/img/slider/shape/slider-shape-3.png";
import shape_4 from "@assets/img/slider/shape/slider-shape-4.png";
import { ArrowRightLong, SliderNextBtn, SliderPrevBtn, TextShape } from "@/svg";

// slider data
const sliderData = [
  {
    id: 1,
    pre_title: { text: "Starting at", price: 274 },
    title: "The best tablet Collection 2023",
    subtitle: {
      text_1: "Exclusive offer ",
      percent: 35,
      text_2: "off this week",
    },
    img: slider_img_1,
    green_bg: true,
  },
  {
    id: 2,
    pre_title: { text: "Starting at", price: 999 },
    title: "The best note book collection 2023",
    subtitle: {
      text_1: "Exclusive offer ",
      percent: 10,
      text_2: "off this week",
    },
    img: slider_img_2,
    green_bg: true,
  },
  {
    id: 3,
    pre_title: { text: "Starting at", price: 999 },
    title: "The best note book collection 2023",
    subtitle: {
      text_1: "Exclusive offer ",
      percent: 10,
      text_2: "off this week",
    },
    img: slider_img_3,
    is_light: true,
  },
];

// { img, num }: These are props (inputs) passed to the component.
function Shape({ img, num }) {
  return (
    <Image className={`tp-slider-shape-${num}`} src={img} alt="slider-shape" priority />
  );
}

const HomeHeroSlider = () => {
  const [active,setActive] = useState(false);

  // handleActiveIndex
  const handleActiveIndex = (index) => {
    if(index === 2){
      setActive(true)
    }
    else {
      setActive(false)
    }
  }
  return (
    <>
      <section className="tp-slider-area p-relative z-index-1">
      {/* This snippet is configuring a Swiper component, which is a popular React-based 
      carousel/slider library. */}
        <Swiper
        // What it does: Ensures that only one slide is visible at a time in the slider.
          slidesPerView={1}
          // Adds 30 pixels of space between each slide.
          spaceBetween={30}
          // Disables the looping functionality of the slider.
          loop={false}
          // What it does: Changes the transition effect between slides to a fade effect.
          effect="fade"
          // Enables manual navigation for the slider using custom buttons
          navigation={{
            nextEl: ".tp-slider-button-next",
            prevEl: ".tp-slider-button-prev",
          }}
          // This is an event handler that gets triggered whenever the active slide changes in the Swiper.
         //swiper.activeIndex gives the index of the currently active slide
          onSlideChange={(swiper) => handleActiveIndex(swiper.activeIndex)}
          // These dots represent each slide and allow the user to click on them to navigate to a specific slide.
          pagination={{ el: ".tp-slider-dot", clickable: true }}
         // Navigation: Enables the "Next" and "Previous" button functionality.
         // Pagination: Adds clickable dots for navigation.
        // EffectFade: Enables the fade transition effect between slides.
          modules={[Navigation, Pagination, EffectFade]}
          //Base class for the active slider.
          //Additional styling for Swiper.
          className={`tp-slider-active tp-slider-variation swiper-container ${
            // Dynamically adds the "is-light" class if active is true.
           // Otherwise, it adds no additional class.
            active ? "is-light" : ""
          }`}
        >
          {sliderData.map((item) => (
            <SwiperSlide
              key={item.id}
              className={`tp-slider-item tp-slider-height d-flex align-items-center ${
                item?.green_bg
                  ? "green-dark-bg"
                  : item?.is_light
                  ? "is-light"
                  : ""
              }`}
              style={{ backgroundColor: item.is_light && "#E3EDF6" }}
            >
              <div className="tp-slider-shape">
                <Shape img={shape_1} num="1" />
                <Shape img={shape_2} num="2" />
                <Shape img={shape_3} num="3" />
                <Shape img={shape_4} num="4" />
              </div>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-5 col-lg-6 col-md-6">
                    <div className="tp-slider-content p-relative z-index-1">
                      <span>
                        {item.pre_title.text} <b>${item.pre_title.text}</b>
                      </span>
                      <h3 className="tp-slider-title">{item.title}</h3>
                      <p>
                        {item.subtitle.text_1}
                        <span>
                          -{item.subtitle.percent}%
                          <TextShape />
                        </span>{" "}
                        {item.subtitle.text_2}
                      </p>

                      <div className="tp-slider-btn">
                        <Link href="/shop" className="tp-btn tp-btn-2 tp-btn-white">
                          Shop Now
                          {" "} <ArrowRightLong />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-6 col-md-6">
                    <div className="tp-slider-thumb text-end">
                      <Image src={item.img} alt="slider-img" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="tp-slider-arrow tp-swiper-arrow">
            <button type="button" className="tp-slider-button-prev">
              <SliderPrevBtn />
            </button>
            <button type="button" className="tp-slider-button-next">
              <SliderNextBtn />
            </button>
          </div>
          <div className="tp-slider-dot tp-swiper-dot"></div>
        </Swiper>
      </section>
    </>
  );
};

export default HomeHeroSlider;
