import { useEffect, useState } from "react";
import { MOCK } from "@/utils/mock.json";
import MovideDetailPresent from "./Present";
import { convertDetail, convertList } from "@/utils/convert";
import style from "@/components/common/nav/subnav.module.scss";
import { IConvertDetailResult } from "@/utils/interfaces/movie.interface";
import Router from "next/router";
import { getFilterMovie } from "@/apis/movie.api";

function handleOnScroll() {
	const trailerElement = document.getElementById("trailer");
	const infoElement = document.getElementById("movie-info");
	const trailerNavElement = document.getElementById("trailer-nav");
	const movieInfoNavElement = document.getElementById("movie-info-nav");

	if (trailerElement && infoElement && movieInfoNavElement && trailerNavElement) {
		const trailerHeight = trailerElement.clientHeight;

		if (window.scrollY > trailerHeight) {
			// info
			movieInfoNavElement.classList.add(style.active);
			trailerNavElement.classList.remove(style.active);
		} else {
			// trailer
			movieInfoNavElement.classList.remove(style.active);
			trailerNavElement.classList.add(style.active);
		}
	}
}

export default function MovideDetailContaier({
	detailData,
}: {
	detailData: IConvertDetailResult;
}) {
	const [currVodUrl, setCurrVodUrl] = useState<string>("");
	const [reladtedData, setReladtedData] = useState<any[]>([]);

	function onClickMovie(id: number) {
		Router.push(`/${id}`);
	}

	async function handleRelatedData() {
		const genres = detailData?.genre?.reduce((acc, cur, idx) => {
			if (idx === 0) acc = cur;
			else acc += `genres=${cur}`;

			if (detailData?.genre.length - 1 !== idx) acc += "&";

			return acc;
		}, "");

		let queryStrings = {
			offset: 0,
			limit: 15,
			genres,
		};

		const { data } = await getFilterMovie(queryStrings);
		// TODO: fetch data
		const result = convertList({ data });
		setReladtedData(result);
	}

	useEffect(() => {
		document.addEventListener("scroll", handleOnScroll);

		return () => {
			document.removeEventListener("scroll", handleOnScroll);
		};
	}, []);

	const subtitle = `${detailData?.titleEng} ${detailData?.openDate}`;

	useEffect(() => {
		if (Object.keys(detailData).length > 0) {
			setCurrVodUrl(detailData?.vodUrl?.[0].url);
			handleRelatedData();
		}
	}, [detailData]);

	return (
		<MovideDetailPresent
			title={detailData?.title}
			subTitle={subtitle}
			img={detailData?.img}
			openDate={detailData?.openDate}
			runningTimeMinute={detailData?.runningTimeMinute}
			actors={detailData?.actors}
			directors={detailData?.directors}
			producer={detailData?.producer}
			distributor={detailData?.distributor}
			keywords={detailData?.keywords}
			genre={detailData?.genre}
			vodUrl={detailData?.vodUrl}
			currVodUrl={currVodUrl}
			synopsis={detailData?.synopsis}
			reladtedData={reladtedData}
			onClickThumbnail={setCurrVodUrl}
			onClickMovie={onClickMovie}
		/>
	);
}
