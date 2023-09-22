import { useEffect, useRef } from "react";
import { IVodProps } from "./vod.interface";
import style from "./vod.module.scss";
import PlayBtn from "@/assets/play.svg";

export default function VodComponent({
  url = "",
  isThumbnail = false,
  thumbnail,
  onClickThumbnail,
}: IVodProps) {
  const videoRef = useRef(null);

  function handleClick(e: any) {
    e.preventDefault();
    if (onClickThumbnail && url) onClickThumbnail(url);
  }

  async function playVideo(videoElement: HTMLVideoElement, url: string) {
    videoElement.load();

    try {
      await videoElement.play();
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    if (videoRef.current && url) {
      const videoElement = videoRef.current as HTMLVideoElement;
      playVideo(videoElement, url);
    }
  }, [url]);

  return (
    <div
      className={`${style.container} ${
        isThumbnail ? style.thumbnail_wrapper : ""
      }`}
    >
      {!isThumbnail && (
        <div className={style.trailer_mov}>
          <video ref={videoRef} muted loop controls>
            <source src={url} type="video/mp4" />
          </video>
        </div>
      )}
      {isThumbnail && (
        <div className={style.thumbnail_container}>
          <div
            className={style.thumbnail}
            style={{ backgroundImage: `url(${thumbnail})` }}
          />
        </div>
      )}
      {isThumbnail && (
        <button className={style.play_button} onClick={handleClick}>
          <PlayBtn />
        </button>
      )}
    </div>
  );
}
