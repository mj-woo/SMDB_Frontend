interface ITab {
	name: string;
	value: string;
}

export interface ITabsProps {
	data: ITab[];
	currentTab?: string;
	onChangeTab?: (value: string) => void;
	className?: any;
}
