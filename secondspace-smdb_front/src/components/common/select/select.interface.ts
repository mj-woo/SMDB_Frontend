import { ActionMeta } from "react-select";

export interface ISelectProps {
	name?: string;
	value: string;
	onChange: (newValue: any, actionMeta: ActionMeta<any>) => void;
	placeholder?: string;
	options: any[];
}
