import ReactPagination, { ReactJsPaginationProps } from "react-js-pagination";
import "./pagination.css";

export default function Pagination(props: ReactJsPaginationProps) {
  return (
    <div className="pagination-wrapper">
      <ReactPagination {...props} />
    </div>
  );
}
