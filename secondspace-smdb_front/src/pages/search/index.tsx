import Layout from "@/components/layouts";

import SearchContainer from "@/components/search";

export default function SearchPage() {
	return (
		<Layout
			title="검색결과 | SMDB"
			description="SMDB의 검색결과 페이지"
			keywords="SMDB searching"
		>
			<SearchContainer />
		</Layout>
	);
}
