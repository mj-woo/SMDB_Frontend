import SearchIcon from "@/assets/Union.svg";
import style from "./search.module.scss";
import { ISearchProps } from "./search.interface";

export default function Search({ onClick }: ISearchProps) {
	return (
		<div className={style.search_container} onClick={onClick}>
			<p>영화, 인물, 키워드 검색</p>
			<SearchIcon />
		</div>
	);
}
