import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ page, setActivePage }) => {
  return (
    <ReactPaginate
      pageCount={page}
      className="pagination gap-2"
      pageClassName="page-item"
      previousLabel="Prev"
      nextLabel="Next"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      activeClassName="active"
      onPageChange={(data) => setActivePage(data.selected + 1)}
    />
  );
};

export default Pagination;
