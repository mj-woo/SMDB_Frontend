export interface ISearchProps {
	onClick: () => void;
}

export interface ISearchPanelPresentProps {
	inputValue: string;
	selectValue: any;
	selectOptions: Array<{
		label: string;
		value: string;
	}>;
	currentValue: string[];

	onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onClickSelect: (newValue: any, type: string) => void;
	onClickGenere: (value: string) => void;
	onClickSearch: () => void;
	onClickReset: () => void;
	onClose: () => void;
}

export interface IGenereBox {
	currentValue: string[];
	onClick: (value: string) => void;
}
