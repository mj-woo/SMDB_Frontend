import SearchIcon from "@/assets/Union.svg";
import { IInputProps } from "./input.interface";

export default function InputComponent({
  name,
  value,
  onChange,
  placeholder,
}: IInputProps) {
  return (
    <div>
      <input
        type="search"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <SearchIcon />
    </div>
  );
}
