import { getMovieDetail } from "@/apis/movie.api";
import MovideDetailContaier from "@/components/detail";
import Layout from "@/components/layouts";
import { convertDetail } from "@/utils/convert";

export default function MovieDetail(data: any) {
	const subData = {
		title: data?.title,
		sub: `${data?.titleEng} ${data?.openDate}`,
	};

	return (
		<Layout
			active="home"
			isSubmenu
			subData={subData}
			title={`${data?.title} (${data?.titleEng}) | SMDB`}
			description={data?.synopsis?.plotText}
		>
			<MovideDetailContaier detailData={data} />
		</Layout>
	);
}

export async function getStaticProps({
	params,
}: {
	params: {
		id: number;
	};
}) {
	const id = +params?.id;
	// TODO: id 값으로 fetch 요청

	const result = await getMovieDetail(id);

	const data = convertDetail(result);

	try {
		return {
			props: data,
			revalidate: 1,
		};
	} catch (error) {}
}

export async function getStaticPaths(context: any) {
	return {
		paths: [],
		fallback: true,
	};
}
