import Card from "../card";
import { IPresentListProps } from "./list.interface";
// import Left from "@/assets/vector_left.svg";
// import Right from "@/assets/vector_right.svg";
import Pagination from "./Pagination";

export default function ListPresnt({
	data,
	handlePageClick,
	itemsPerPage,
	currentPage,
	pageCount,
	onClickCard,
}: IPresentListProps) {
	// const [itemOffset, setItemOffset] = useState<number>(0);

	return (
		<div>
			<div>
				{data.map((item, idx) => {
					return (
						<Card key={`movie_list_detail_${idx}`} {...item} onClick={onClickCard} />
					);
				})}
			</div>
			{/* pagination */}
			<Pagination
				handlePageClick={handlePageClick}
				itemsPerPage={itemsPerPage}
				currentPage={currentPage}
				data={data}
				pageCount={pageCount}
			/>
		</div>
	);
}
