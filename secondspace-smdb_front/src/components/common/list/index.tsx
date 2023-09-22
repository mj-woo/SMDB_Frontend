import ListPresnt from "./Present";
import { IPresentListProps } from "./list.interface";

export default function ListContainer({
	data,
	handlePageClick,
	onClickCard,
	itemsPerPage,
	currentPage,
	pageCount,
}: IPresentListProps) {
	return (
		<ListPresnt
			data={data}
			handlePageClick={handlePageClick}
			onClickCard={onClickCard}
			itemsPerPage={itemsPerPage}
			pageCount={pageCount}
			currentPage={currentPage}
		/>
	);
}
