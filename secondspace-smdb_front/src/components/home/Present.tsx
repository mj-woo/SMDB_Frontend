import { ALL_GENRE, VIEW_JSON } from "@/utils/genre.json";
import Slider from "../common/slider";
import Tabs from "../common/tabs";
import TitleComponent from "../common/title";
import { IHomePresentProps } from "./home.interface";
import style from "./home.module.scss";
import Polygon from "@/assets/Polygon.svg";

export default function Present({
  mainVideo,
  title,
  description,
  link,
  latestData,
  selectedGenre,
  selectedView,
  genreData,
  screeningData,
  onChangeTab,
  onClickMovie,
}: IHomePresentProps) {
  return (
    <div className={style.container}>
      <div className={style.main_thumbnail_container}>
        {mainVideo && (
          <video muted autoPlay loop>
            <source src={mainVideo} type="video/mp4" />
          </video>
        )}
        <div className={style.description}>
          <div className={style.top}>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>

          <a href={link}>
            자세히 보기
            <Polygon />
          </a>
        </div>
      </div>
      <div className={style.contents}>
        <div className={style.wrap}>
          <TitleComponent title="가장 사랑받은 영화" actionLabel="" />
          <div className={style.sliderWrap}>
            <Slider data={latestData} isShowIndex onClick={onClickMovie} />
          </div>
        </div>
        <div>
          <TitleComponent actionLabel="전체보기" link="/movies">
            <Tabs
              data={ALL_GENRE}
              currentTab={selectedGenre}
              onChangeTab={(currTab) => onChangeTab("genre", currTab)}
            />
          </TitleComponent>
          <div className={style.sliderWrap}>
            <Slider data={genreData} isShowIndex onClick={onClickMovie} />
          </div>
        </div>
        <div>
          <TitleComponent actionLabel="전체보기" link="/screening">
            <Tabs
              data={VIEW_JSON}
              currentTab={selectedView}
              onChangeTab={(currTab) => onChangeTab("view", currTab)}
            />
          </TitleComponent>
          <div className={style.sliderWrap}>
            <Slider data={screeningData} isShowIndex onClick={onClickMovie} />
          </div>
        </div>
      </div>
    </div>
  );
}
