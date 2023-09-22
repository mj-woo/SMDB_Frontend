import {
	IConvert,
	IConvertDetailResult,
	IConvertListResult,
	IMovie,
} from "./interfaces/movie.interface";

export const convertList = ({ data }: IConvert): IConvertListResult[] | [] => {
	if (data?.length === 0) return [];

	const result = data?.map((item: IMovie) => {
		return {
			id: item.id,
			title: item.title,
			genre: item.genre,
			openDate: item.openDate,
			runningTimeMinute: item.runningTimeMinute,
			img: item.posterUrl[0],
			description: item.synopsis.plotText,
			mainVideo: item.vodUrl[0][1],
		};
	});

	return result;
};

export const convertDetail = (data: IMovie): IConvertDetailResult => {
	const vodUrl = data?.vodUrl?.map((item: any) => {
		return {
			thumbnailUrl: item?.[0],
			url: item?.[1],
		};
	});

	const result = {
		id: data.id,
		title: data.title,
		titleEng: data.titleEng,
		genre: data.genre,
		openDate: data.openDate,
		runningTimeMinute: data.runningTimeMinute,
		synopsis: data.synopsis,
		actors: data.actors,
		directors: data.directors,
		producer: data.producer,
		distributor: data.distributor,
		keywords: data.keywords,
		img: data.posterUrl[0],
		vodUrl,
	};

	return result;
};

export function queryStringify(obj: any) {
	const keyValuePairs = [];

	for (const key in obj) {
		if (obj.hasOwnProperty(key)) {
			const value = obj[key];
			if (value !== undefined) {
				keyValuePairs.push(`${encodeURIComponent(key)}=${value}`);
			}
		}
	}

	return keyValuePairs.join("&");
}
