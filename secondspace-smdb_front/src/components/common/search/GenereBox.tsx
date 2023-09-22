import { ALL_GENRE } from "@/utils/genre.json";
import style from "./genere.module.scss";
import { IGenereBox } from "./search.interface";

export default function GenereBox({ currentValue, onClick }: IGenereBox) {
	return (
		<ul className={style.container}>
			{ALL_GENRE.map((genre) => {
				return (
					<li
						key={`search_${genre.value}`}
						className={currentValue.includes(genre.value) ? style.active : ""}
						onClick={() => onClick(genre.value)}
					>
						{genre.name}
					</li>
				);
			})}
		</ul>
	);
}
