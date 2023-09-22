import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";

import SearchPanelPresent from "./SearchPanelPresent";
import options from "../select/options";
import { queryStringify } from "@/utils/convert";
import { useSetRecoilState } from "recoil";
import { isShowSearch } from "@/stores/search.atom";

const selectOptions = options();

export default function SearchPanel() {
	const [inputValue, setInputValue] = useState<string>("");
	const [selectValue, setSelectValue] = useState<any>({
		start: null,
		end: null,
	});
	const [currentValue, setCurrentValue] = useState<string[]>(["all"]);
	const isShowSearchState = useSetRecoilState(isShowSearch);

	const { query } = useRouter();

	function onChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
		setInputValue(e.target.value);
	}

	function onClickSelect(newValue: any, type: string) {
		setSelectValue({
			...selectValue,
			[type]: newValue,
		});
	}

	function onClickSearch() {
		const data = {
			keyword: inputValue,
			genre: currentValue?.join(","),
			start: selectValue.start?.value,
			end: selectValue.end?.value,
		};

		const qr = queryStringify(data);
		const url = `/search?${qr}`;

		Router.push(url);
	}

	function onClickReset() {
		setInputValue("");
		setSelectValue({
			start: null,
			end: null,
		});
		setCurrentValue(["all"]);
	}

	function onClickGenere(genere: string) {
		const index = currentValue.indexOf(genere);

		if (index === -1) {
			if (genere === "all") {
				setCurrentValue(["all"]);
				return;
			}

			const newCurrent = [...currentValue, genere].filter((item) => item !== "all");
			setCurrentValue(newCurrent);
		} else {
			const newCurrent = currentValue.filter((item) => item !== genere);
			setCurrentValue(newCurrent);
		}
	}

	function onClose() {
		isShowSearchState(false);
	}

	useEffect(() => {
		const keyword = query?.keyword ?? "";
		const qGenre = query?.genre as string;
		const genre = !!qGenre ? qGenre?.split(",") : ["all"];
		setInputValue(keyword as string);
		setCurrentValue(genre);

		const start = query?.start ?? null;
		const end = query?.end ?? null;

		setSelectValue({
			start,
			end,
		});
	}, [query]);

	return (
		<SearchPanelPresent
			inputValue={inputValue}
			selectValue={selectValue}
			selectOptions={selectOptions}
			currentValue={currentValue}
			onChangeInput={onChangeInput}
			onClickSelect={onClickSelect}
			onClickGenere={onClickGenere}
			onClickSearch={onClickSearch}
			onClickReset={onClickReset}
			onClose={onClose}
		/>
	);
}
