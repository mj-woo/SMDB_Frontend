import { ALL_GENRE } from "@/utils/genre.json";
import PresentMovieCategory from "./Present";
import { IMoviesProps } from "./movies.interface";
import { convertList } from "@/utils/convert";
import Router from "next/router";
import { useEffect, useState } from "react";
import { getFilterMovie } from "@/apis/movie.api";

export default function MovieCategoryContainer({ currentTab }: IMoviesProps) {
	const [data, setData] = useState<any[]>([]);
	const [page, setPage] = useState<number>(0);
	const [totalItems, setTotalItems] = useState<number>(0);
	const [genere, setGenere] = useState<string | undefined>("all");

	const title = ALL_GENRE.find((genre) => genre.value === currentTab)?.name ?? currentTab;

	async function fetchMovies(page: number, currentTab: string | undefined) {
		const queryStrings = {
			offset: page, 
			limit: 15 * (page + 1), 
		};

		if (currentTab !== "all") {
			const genres = ALL_GENRE.find((genre) => genre.value === currentTab)?.name;
			Object.assign(queryStrings, { genres });
		}

		const { data, totalCount } = await getFilterMovie(queryStrings);
		const result = convertList({ data });

		setData(result);
		setTotalItems(totalCount);
	}

	function handlePageClick(data: any) {
		setPage(data?.selected);
	}

	function onClickMovie(id: number) {
		Router.push(`/${id}`);
	}

	useEffect(() => {
		setPage(0);
		setGenere(currentTab);
	}, [currentTab]);

	useEffect(() => {
		fetchMovies(page, genere);
	}, [page, genere]);

	return (
		<PresentMovieCategory
			title={title}
			data={data}
			meta={{
				totalItems,
				itemsPerPage: 15,
				totalPages: Math.ceil(totalItems / 15),
				currentPage: page, 
			}}
			handlePageClick={handlePageClick}
			onClickMovie={onClickMovie}
		/>
	);
}
