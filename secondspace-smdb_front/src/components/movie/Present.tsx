import ListContainer from "../common/list";
import { IPresentMoviesPresentProps } from "./movies.interface";
import style from "./movie.module.scss";

export default function PresentMovieCategory({
  title,
  data = [],
  handlePageClick,
  meta,
  onClickMovie,
}: IPresentMoviesPresentProps) {
  return (
    <div className={style.container}>
      <div className={style.contents}>
        <h2>{title}</h2>
        {data.length === 0 && (
          <div className={style.no_result}>
            <p className="no_search">ㅠ_ㅠ</p>
            <p>데이터가 없는 것 같아요.</p>
          </div>
        )}
        {data?.length > 0 && (
          <div className={style.movie_list}>
            <ListContainer
              data={data}
              handlePageClick={handlePageClick}
              currentPage={meta.currentPage}
              itemsPerPage={meta.itemsPerPage}
              pageCount={meta.totalPages}
              onClickCard={onClickMovie}
            />
          </div>
        )}
      </div>
    </div>
  );
}
