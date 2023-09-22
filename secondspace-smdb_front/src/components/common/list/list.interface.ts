import { IConvertListResult } from "@/utils/interfaces/movie.interface";

export interface IPaginationProps {
	data: any[];
	handlePageClick: (data: any) => void;
	itemsPerPage: number;
	currentPage: number;
	pageCount: number;
}

export interface IPresentListProps extends IPaginationProps {
	pageCount: number;
	onClickCard: (data: any) => void;
}
