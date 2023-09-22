import { ITabsProps } from "./tabs.interface";
import style from "./tabs.module.scss";

export default function Tabs({
	data,
	currentTab,
	onChangeTab,
	className = "",
}: ITabsProps) {
	function onClickTab(value: string) {
		if (onChangeTab) onChangeTab(value);
	}

	return (
		<ul className={`${style.container} ${className}`}>
			{data.map((item, index) => {
				return (
					<li
						key={index}
						className={currentTab === item.value ? style.active : ""}
						onClick={() => onClickTab(item.value)}
					>
						{item.name}
					</li>
				);
			})}
		</ul>
	);
}
