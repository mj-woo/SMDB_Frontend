import {
  MOVIDE_DETAIL_APPEARENCE_LABELS,
  MOVIDE_DETAIL_LABELS,
} from "@/utils/movide-detail.json";
import VodComponent from "../common/vod";
import { IDetailProps, IDetailValues, IGridProps } from "./detail.interface";
import style from "./detail.module.scss";
import TitleComponent from "../common/title";
import Slider from "../common/slider";

function MultiLineTextComponent({ values }: IDetailValues) {
  if (!values || (Array.isArray(values) && values.length === 0)) {
    return <span key={`multi_line_text`}>정보 없음</span>;
  }

  if (typeof values === "string") return <span>{values}</span>;

  return Object.keys(values).map((key: any, index) => {
    const value = values[key];

    return <span key={`multi_line_text_${index}`}>{value}</span>;
  });
}

function GridComponent({ title, labels, values }: IGridProps) {
  return (
    <section>
      <h3>{title}</h3>
      <ul className={style.mov_InfoList}>
        {Object.keys(labels).map((key, index) => {
          const label = labels[key];
          const value = values[key];

          return (
            <li key={`grid_${index}`}>
              <h5>{label}</h5>
              <span>
                <MultiLineTextComponent values={value} />
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default function MovideDetailPresent({
  title,
  subTitle, // titleEng + openDate
  img,
  openDate,
  runningTimeMinute,
  actors,
  directors,
  producer,
  distributor,
  keywords,
  genre,
  vodUrl = [],
  currVodUrl,
  synopsis,
  reladtedData = [],
  onClickThumbnail,
  onClickMovie,
}: IDetailProps) {
  try {
    return (
      <div className={style.container}>
        <div id="trailer" className={style.trailer_container}>
          <div className={style.trailer}>
            <VodComponent url={currVodUrl} />
          </div>
          <div className={style.thumbnails}>
            {vodUrl.map((item, index) => {
              return (
                <VodComponent
                  key={`vod_${index}`}
                  isThumbnail
                  thumbnail={item?.thumbnailUrl}
                  url={item?.url}
                  onClickThumbnail={onClickThumbnail}
                />
              );
            })}
          </div>
        </div>
        <div id="movie-info" className={style.movie_info_container}>
          <div className={style.movie_info}>
            <section>
              <div className={style.info}>
                <h2>{title}</h2>
                <p>{subTitle}</p>
              </div>
              <ul className={style.tags}>
                {keywords?.map((keyword, index) => {
                  return (
                    <li key={`keyword_${index}`}>
                      {keyword ? `#${keyword}` : "정보 없음"}
                    </li>
                  );
                })}
              </ul>
            </section>
            <GridComponent
              title="영화정보"
              labels={MOVIDE_DETAIL_LABELS}
              values={{
                openDate,
                genre,
                plotLang: synopsis?.plotLang,
                runningTimeMinute,
              }}
            />
            <GridComponent
              title="출연/제작"
              labels={MOVIDE_DETAIL_APPEARENCE_LABELS}
              values={{
                directors,
                actors,
                producer,
                distributor,
              }}
            />
            <section>
              <h3>시놉시스</h3>
              <p>{synopsis?.plotText}</p>
            </section>
          </div>
          <div
            className={style.poster_img}
            style={{ backgroundImage: `url(${img})` }}
          />
        </div>
        <div className={style.related_container}>
          <div className={style.related_contents}>
            <TitleComponent title="비슷한 키워드의 영화" actionLabel="더보기" />
            <Slider data={reladtedData} onClick={onClickMovie} />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.log("error", error);
    return "error";
  }
}
