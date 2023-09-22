import { NextSeo } from "next-seo";
import Head from "next/head";
import { ILayouts } from "./layouts.interface";
import Navigation from "../common/nav";
import styles from "./layout.module.scss";
import SubNav from "../common/nav/SubNav";
import { useState } from "react";
import SearchPanel from "../common/search/SearchPanel";
import { useRecoilState } from "recoil";
import { isShowSearch } from "@/stores/search.atom";

export default function Layout({
	title,
	description,
	keywords,
	children,
	id,
	className,
	active,
	isSubmenu = false,
	isTabs = false,
	subData,
	currentTab,
	onChangeTab,
}: ILayouts) {
	const [isMenuOpen, setIsMenuOpen] = useRecoilState<boolean>(isShowSearch);

	function onClick() {
		setIsMenuOpen(!isMenuOpen);
	}

	return (
		<>
			<NextSeo
				title={title}
				description={description}
				openGraph={{
					type: "website",
					title: title,
					locale: "ko_KR",
					description: description,
					site_name: "SMDB",
				}}
			/>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				{keywords && <meta name="keywords" content={keywords} />}
			</Head>
			<div style={{ width: "100%" }}>
				<header
					className={styles.header}
					style={{ width: isMenuOpen ? "calc(100% - 328px)" : "100%" }}
				>
					<Navigation active={active} onClick={onClick} isMenuOpen={isMenuOpen} />
					<SubNav
						isSubmenu={isSubmenu}
						isTabs={isTabs}
						subData={subData}
						currentTab={currentTab}
						onChangeTab={onChangeTab}
					/>
				</header>
				<main
					className={styles.main}
					style={{ width: isMenuOpen ? "calc(100% - 328px)" : "100%" }}
				>
					{children}
					{isMenuOpen && <SearchPanel />}
				</main>
			</div>
		</>
	);
}
