import { useEffect, useState } from "react";
import { SCREENING_TABS } from "@/utils/genre.json";
import PresentMovieCategory from "../movie/Present";
import { convertList } from "@/utils/convert";

import Router from "next/router";
import { IMoviesProps } from "../movie/movies.interface";
import { getScreeningData } from "@/apis/movie.api";

export default function ScreeningContainer({ currentTab }: IMoviesProps) {
	const [data, setData] = useState<any[]>([]);
	const [page, setPage] = useState<number>(0);
	const [totalItems, setTotalItems] = useState<number>(0);
	const [prevTab, setPrevTab] = useState<string | undefined>("");

	const title = SCREENING_TABS.find((item) => item.value === currentTab)?.name;

	async function fetchMovies(page: number, currentTab: string | undefined) {
		const queryStrings = {
			offset: page,
			limit: 15 * (page + 1),
		};

		if (currentTab !== prevTab) {
			Object.assign(queryStrings, {
				offset: 0,
				limit: 15,
			});
			setPage(0);
		}

		try {
			const screenings = await getScreeningData(currentTab, queryStrings);

			const data = screenings?.data;
			const totalCount = screenings?.totalCount;
			const result = convertList({ data });

			setData(result);
			setTotalItems(totalCount);
			setPrevTab(currentTab);
		} catch (error) {
			console.log(error);
		}
	}

	function handlePageClick(data: any) {
		setPage(data?.selected);
	}

	function onClickMovie(id: number) {
		Router.push(`/${id}`);
	}

	useEffect(() => {
		fetchMovies(page, currentTab);
	}, [page, currentTab]);

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
