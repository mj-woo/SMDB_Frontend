import Close from "@/assets/close.svg";
import InputComponent from "../input";
import SelectComponent from "../select";
import { ISearchPanelPresentProps } from "./search.interface";
import GenereBox from "./GenereBox";
import style from "./searchPanel.module.scss";

export default function SearchPanelPresent({
  inputValue,
  selectValue,
  selectOptions,
  currentValue,
  onChangeInput,
  onClickSelect,
  onClickGenere,
  onClickSearch,
  onClickReset,
  onClose,
}: ISearchPanelPresentProps) {
  const isDateError =
    selectValue?.start &&
    selectValue?.end &&
    selectValue?.start?.value > selectValue?.end?.value;

  return (
    <div className={style.container}>
      <button className={style.close_btn} onClick={onClose}>
        <Close />
      </button>
      <div className={style.search}>
        <InputComponent
          name="search"
          value={inputValue}
          onChange={onChangeInput}
          placeholder="영화, 인물, 키워드 검색"
        />
        <div className={style.years}>
          <p>개봉년도</p>
          <SelectComponent
            options={selectOptions}
            placeholder="최소 년도"
            value={selectValue?.start}
            onChange={(newValue) => onClickSelect(newValue, "start")}
          />
          <SelectComponent
            options={selectOptions}
            value={selectValue?.end}
            placeholder="최대 년도"
            onChange={(newValue) => onClickSelect(newValue, "end")}
          />
          {isDateError && (
            <div className={style.error}>
              최소 년도를 최대 년도 보다 작거나 같게 <br /> 설정해주세요.
            </div>
          )}
        </div>
        <div className={style.category}>
          <p>장르</p>
          <GenereBox currentValue={currentValue} onClick={onClickGenere} />
        </div>
        <div className={style.btns}>
          <button onClick={onClickReset}>초기화</button>
          <button onClick={onClickSearch}>검색</button>
        </div>
      </div>
    </div>
  );
}
