import ReactPaginate from "react-paginate";
import Left from "@/assets/vector_left.svg";
import Right from "@/assets/vector_right.svg";
import { IPaginationProps } from "./list.interface";
import style from "./pagination.module.scss";

export default function Pagination({
	handlePageClick,
	pageCount,
	currentPage,
}: IPaginationProps) {
	return (
		<div className={style.container}>
			<ReactPaginate
				previousLabel={<Left />}
				nextLabel={<Right />}
				breakLabel={"..."}
				// breakClassName={style.break_me}
				pageCount={pageCount}
				pageRangeDisplayed={5}
				onPageChange={handlePageClick}
				// containerClassName={style.pagination}
				activeClassName={style.active}
				forcePage={currentPage}
				renderOnZeroPageCount={null}
				disabledClassName={style.disabled}
			/>
		</div>
	);
}
