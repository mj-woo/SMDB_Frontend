export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	name: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
}
