import { useState } from "react";
import { ICard } from "./card.interface";
import style from "./card.module.scss";

export default function Card({
  id,
  title,
  img,
  openDate,
  runningTimeMinute,
  genre,
  onClick,
  isShowIndex = false,
  idx,
}: ICard) {
  const [isHover, setIsHover] = useState(false);

  function handleMouseEnter() {
    setIsHover(true);
  }

  function handleMouseLeave() {
    setIsHover(false);
  }

  function handleOnClick() {
    if (onClick) onClick(id);
  }

  return (
    <div
      className={style.container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleOnClick}
    >
      <div className={style.cardInfo}>
        <img src={img} alt="thumbnail" />
        {isShowIndex && <span className={style.index}>{idx}</span>}
        {title && <p>{title}</p>}
      </div>
      <div
        className={style.card_detail}
        style={{ opacity: isHover ? "1" : "0" }}
      >
        <div className={style.card_detail_item}>
          <span className={style.label}>개봉일</span>
          <span className={style.data}>{openDate}</span>
        </div>
        <div className={style.card_detail_item}>
          <span className={style.label}>러닝타임</span>
          <span className={style.data}>{runningTimeMinute}</span>
        </div>
        <div className={style.card_detail_item}>
          <span className={style.label}>장르</span>
          <span className={style.data}>{genre?.join(", ")}</span>
        </div>
      </div>
    </div>
  );
}
