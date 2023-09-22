export interface IVodProps {
	url?: string;
	isThumbnail?: boolean;
	thumbnail?: string;
	onClickThumbnail?: (url: string) => void;
}
