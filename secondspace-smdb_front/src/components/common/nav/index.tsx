import Search from "../search";
import { INavProps } from "./nav.interface";
import style from "./nav.module.scss";
import Logo from "../../../assets/SMDB_logo.svg";

export default function Navigation({ active, isMenuOpen, onClick }: INavProps) {
	return (
		<div className={style.container}>
			<a className={style.logo} href="/">
				<Logo />
			</a>

			<ul>
				<li className={active === "home" ? style.active : ""}>
					<a href="/">홈</a>
				</li>
				<li className={active === "movie" ? style.active : ""}>
					<a href="/movies">카테고리</a>
				</li>
				<li className={active === "screening" ? style.active : ""}>
					<a href="/screening">상영</a>
				</li>
			</ul>
			{!isMenuOpen && <Search onClick={onClick} />}
		</div>
	);
}
