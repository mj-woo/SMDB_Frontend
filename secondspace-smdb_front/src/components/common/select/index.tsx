import Select from "react-select";
import { ISelectProps } from "./select.interface";
import style from "./select.module.scss";

export default function SelectComponent({
  name,
  value,
  onChange,
  placeholder,
  options,
}: ISelectProps) {
  return (
    <Select
      options={options}
      value={value}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      className={style[`react-select-container`]}
      classNamePrefix={style[`react-select`]}
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary25: "#000000", // hover color
          primary: "#2c8e71", // selected color
          neutral0: "#1d1d1d", // background color
          neutral20: "#000000", // border color
          neutral80: "white", // value text color
        },
      })}
    />
  );
}
