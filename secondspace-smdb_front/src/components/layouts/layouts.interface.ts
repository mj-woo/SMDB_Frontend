import { INavSub, TActive } from "../common/nav/nav.interface";

export interface ILayouts extends INavSub {
	children: React.ReactNode;
	title?: string;
	description?: string;
	keywords?: string;
	className?: string;
	id?: string;
	active?: TActive;
	currentTab?: string;
	onChangeTab?: (tab: string) => void;
}
