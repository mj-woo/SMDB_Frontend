import { getFilterMovie } from "@/apis/movie.api";
import { convertList } from "@/utils/convert";
import { ALL_GENRE } from "@/utils/genre.json";
import Router, { useRouter } from "next/router";
import { useState, useEffect } from "react";
import PresentMovieCategory from "../movie/Present";

function convertGenre(genre: string) {
	const genreArr = genre.split(",");

	const genres = genreArr?.reduce((acc, curr, idx) => {
		const cur = ALL_GENRE.find((item) => item.value === curr)?.name as string;
		if (idx === 0) acc = cur;
		else acc += `genres=${cur}`;

		if (genreArr.length - 1 !== idx) acc += "&";

		return acc;
	}, "");

	return genres;
}

export default function SearchContainer() {
	const router = useRouter();
	const { query } = router;
	const [data, setData] = useState<any[]>([]);
	const [page, setPage] = useState<number>(0);
	const [totalItems, setTotalItems] = useState<number>(0);

	async function fetchMovies(page: number, newQuery: any) {
		const queryStrings = {
			offset: page,
			limit: 15 * (page + 1),
		};
		const previousQuery = router.query;

		if (JSON.stringify(previousQuery) !== JSON.stringify(newQuery)) {
			Object.assign(queryStrings, { offset: 0, limit: 15 });
			setPage(0);
		}

		if (!!newQuery?.genre && newQuery?.genre !== "all") {
			Object.assign(queryStrings, { genres: convertGenre(newQuery?.genre) });
		}

		if (!!newQuery.start) Object.assign(queryStrings, { openyear: newQuery.start });
		if (!!newQuery.end) Object.assign(queryStrings, { endyear: newQuery.end });
		if (!!newQuery.keyword) Object.assign(queryStrings, { q: newQuery.keyword });

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
		fetchMovies(page, query);
	}, [page, query]);

	return (
		<PresentMovieCategory
			title="검색결과"
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
