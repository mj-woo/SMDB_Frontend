import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Controller, Navigation } from "swiper/modules";
import "swiper/css";

import { ISliderProps } from "./slider.interface";
import Card from "../card";
import IconBtn from "@/assets/iconBtn.svg";
import style from "./slider.module.scss";
import { useState } from "react";

export default function Slider({ data, isShowIndex, onClick }: ISliderProps) {
  const [controller, setController] = useState<SwiperClass>();
  const [disabled, setDisabled] = useState<string>("beginning");

  const sliderPerView = data?.length > 5 ? 5 : data?.length;

  function handleSlideOnClick(type: string) {
    if (type === "prev") {
      controller?.slidePrev();
    } else {
      controller?.slideNext();
    }

    setDisabled("");
    if (controller?.isBeginning) setDisabled("beginning");
    if (controller?.isEnd) setDisabled("end");
  }

  return (
    <div className={style.container}>
      <Swiper
        slidesPerView={sliderPerView}
        slidesPerGroup={sliderPerView}
        navigation={true}
        centeredSlides={false}
        modules={[Navigation, Controller]}
        controller={{ control: controller }}
        onSwiper={setController}
      >
        {data?.length > 0 ? (
          data?.map((item, index) => (
            <SwiperSlide key={index}>
              <Card
                {...item}
                isShowIndex={isShowIndex}
                idx={index + 1}
                onClick={onClick}
              />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <div className={style.no_result}>
              <p className={style.cry}>ㅠ_ㅠ</p>
              <p>데이터가 없는 것 같아요.</p>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
      {data?.length > 5 && (
        <>
          <button
            onClick={() => handleSlideOnClick("prev")}
            className={`${disabled === "beginning" ? style.disabled : ""} ${
              style.button
            }`}
          >
            <IconBtn />
          </button>
          <button
            onClick={() => handleSlideOnClick("next")}
            className={`${disabled === "end" ? style.disabled : ""} ${
              style.button
            }`}
          >
            <IconBtn />
          </button>
        </>
      )}
    </div>
  );
}
