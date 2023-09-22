import { METHODS, request } from "@/utils/request";

export const getMostLoved = async (queryStringify: any) => {
	try {
		const result = await request("movies/mostloved", METHODS.GET, queryStringify);

		return result;
	} catch (error) {}
};

export const getFilterMovie = async (queryStrings: any) => {
	try {
		const result = await request("movies/filter", METHODS.GET, queryStrings);

		return result;
	} catch (error) {}
};

export const getOnScreen = async (queryStringify: any) => {
	try {
		const result = await request("movies/onscreen", METHODS.GET, queryStringify);

		return result;
	} catch (error) {}
};

export const getComingSoon = async (queryStringify: any) => {
	try {
		const result = await request("movies/comingsoon", METHODS.GET, queryStringify);

		return result;
	} catch (error) {}
};

export const getOffScreen = async (queryStringify: any) => {
	try {
		const result = await request("movies/offscreen", METHODS.GET, queryStringify);

		return result;
	} catch (error) {
		return { data: [], totalCount: 0 };
	}
};

export const getScreeningData = async (
	screeningType: string | undefined,
	queryStringify: any = { offset: 0, limit: 15 }
) => {
	try {
		if (screeningType === "before") return await getComingSoon(queryStringify);
		if (screeningType === "now") return await getOnScreen(queryStringify);
		if (screeningType === "after") return await getOffScreen(queryStringify);

		return await getFilterMovie(queryStringify);
	} catch (error) {
		console.log("ScreeningData", error);
		return { data: [], totalCount: 0 };
	}
};

export const getMovieDetail = async (movieId: number) => {
	try {
		const result = await request(`movies/detail/${movieId}`, METHODS.GET);

		return result;
	} catch (error) {}
};
