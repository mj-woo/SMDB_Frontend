export interface INavSub {
	isSubmenu?: boolean;
	isTabs?: boolean;
	subData?: any;
	currentTab?: string;
	onChangeTab?: (tab: string) => void;
}

export type TActive = "home" | "movie" | "screening";

export interface INavProps {
	active?: TActive;
	onClick: () => void;
	isMenuOpen: boolean;
}
