import { useEffect, useState } from "react";
import Present from "./Present";
import { convertList } from "@/utils/convert";
import { MOCK } from "@/utils/mock.json";
import Router from "next/router";
import { getFilterMovie, getMostLoved, getScreeningData } from "@/apis/movie.api";
import { ALL_GENRE } from "@/utils/genre.json";

export default function HomeContainer() {
	const [selectedGenre, setSelectedGenre] = useState<string>("all");
	const [screeningType, setScreeningType] = useState<string>("before");
	const [latestData, setLatestData] = useState<any[]>([]);
	const [genreData, setGenreData] = useState<any[]>([]);
	const [screeningData, setScreeningData] = useState<any[]>([]);
	const [detailData, setDetailData] = useState<any>({
		mainVideo: "",
		title: "",
		description: "",
		link: "",
	});

	function onChangeTab(type: string, currTab: string) {
		if (type === "genre") {
			setSelectedGenre(currTab);
		} else setScreeningType(currTab);
	}

	async function fetchDetailData(data: any) {
		setDetailData({
			mainVideo: data?.mainVideo,
			title: data?.title,
			description: data?.description,
			link: `/${data?.id}`,
		});
	}

	async function fetchMostLoved() {
		const mostLoved = await getMostLoved({ offset: 0, limit: 15 });
		const result = convertList({ data: mostLoved?.data });

		fetchDetailData(result?.[0]);
		setLatestData(result);
	}

	async function fetchGenreData(selectedGenre: string) {
		const queryStrings = {
			offset: 0,
			limit: 15,
		};
		if (selectedGenre !== "all") {
			const genres = ALL_GENRE.find((genre) => genre.value === selectedGenre)?.name;
			Object.assign(queryStrings, { genres });
		}

		const { data } = await getFilterMovie(queryStrings);

		const result = convertList({ data });
		setGenreData(result);
	}

	async function fetchScreeningData(screeningType: string) {
		const { data } = await getScreeningData(screeningType);

		const result = convertList({ data });
		setScreeningData(result);
	}

	function onClickMovie(id: number) {
		Router.push(`/${id}`);
	}

	useEffect(() => {
		fetchMostLoved();
	}, []);

	useEffect(() => {
		fetchGenreData(selectedGenre);
	}, [selectedGenre]);

	useEffect(() => {
		fetchScreeningData(screeningType);
	}, [screeningType]);

	return (
		<Present
			mainVideo={detailData.mainVideo}
			title={detailData.title}
			description={detailData.description}
			link={detailData.link}
			latestData={latestData}
			selectedGenre={selectedGenre}
			selectedView={screeningType}
			genreData={genreData}
			screeningData={screeningData}
			onChangeTab={onChangeTab}
			onClickMovie={onClickMovie}
		/>
	);
}
