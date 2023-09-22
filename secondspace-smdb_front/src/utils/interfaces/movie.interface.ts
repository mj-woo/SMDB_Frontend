export interface IMovie {
	id: number;
	title: string;
	titleEng: string;
	genre: string[];
	synopsis: {
		plotLang: string;
		plotText: string;
	};
	openDate: string;
	runningTimeMinute: string;
	actors: string[];
	directors: string[];
	producer: string[];
	distributor: string[];
	keywords: string[];
	posterUrl: string[];
	vodUrl: any[];
}

export interface IConvert {
	data: IMovie[] | [];
}

export interface IConvertListResult {
	id: number;
	title: string;
	genre: string[];
	openDate: string;
	runningTimeMinute: string;
	img: string;
	description?: string;
	mainVideo?: string;
}

export interface IConvertDetailResult extends IConvertListResult {
	titleEng: string;
	synopsis: {
		plotLang: string;
		plotText: string;
	};
	actors: string[];
	directors: string[];
	producer: string[];
	distributor: string[];
	keywords: string[];
	vodUrl: any[];
}
