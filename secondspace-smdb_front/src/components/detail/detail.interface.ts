import { IConvertListResult, IMovie } from "@/utils/interfaces/movie.interface";

export type IDetailValues = {
  [key: string]: string | string[] | undefined;
};

export interface IGridProps {
  title: string;
  labels: { [key: string]: string };
  values: IDetailValues;
}

export interface IDetailProps extends Partial<IMovie> {
  currVodUrl: string;
  subTitle: string;
  img: string;
  reladtedData: IConvertListResult[] | [];
  onClickThumbnail: (vodUrl: string) => void;
  onClickMovie: (movieId: number) => void;
}
