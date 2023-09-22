import { IConvertListResult } from "@/utils/interfaces/movie.interface";

export interface ICard extends IConvertListResult {
	onClick?: (data: any) => void;
	isShowIndex?: boolean;
	idx?: number;
}
