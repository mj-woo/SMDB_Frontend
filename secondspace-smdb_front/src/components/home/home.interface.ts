import { IConvertListResult, IMovie } from "@/utils/interfaces/movie.interface";

export interface IHomePresentProps {
  mainVideo: string;
  title: string;
  description: string;
  link?: string;
  latestData: IConvertListResult[] | [];
  selectedGenre: string;
  selectedView: string;
  genreData: IConvertListResult[] | [];
  screeningData: IConvertListResult[] | [];
  onChangeTab: (type: string, value: string) => void;
  onClickMovie: (id: number) => void;
}
