import { IConvertListResult } from "@/utils/interfaces/movie.interface";

export interface IMoviesProps {
  currentTab?: string;
}

export interface IPresentMoviesPresentProps {
  title?: string;
  data: IConvertListResult[] | [];
  meta: {
    totalItems: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
  handlePageClick: (data: any) => void;
  onClickMovie: (data: any) => void;
}
