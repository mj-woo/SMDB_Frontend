import { IConvertListResult, IMovie } from "@/utils/interfaces/movie.interface";

export interface ISliderProps {
  data: IConvertListResult[] | [];
  isShowIndex?: boolean;
  onClick?: (id: number) => void;
}
