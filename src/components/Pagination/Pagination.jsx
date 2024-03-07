import React, { forwardRef } from "react";
import "./Pagination.css";
const Pagination = forwardRef(
  ({ dataPerPage, currentPage, setCurrentPage, data = [] }, ref) => {
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const totalPages = Math.ceil(data.length / dataPerPage);
    const pageNumber = Array.from(
      { length: totalPages },
      (_, index) => index + 1
    );
    // console.log(totalPageNuber);
    return (
      <div ref={ref} className="pagination">
        <div className="pagintaionContainer">
          <button
            className="paginationPreviousPage"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous Page
          </button>
          <ul className="paginationPageNumbers">
            {pageNumber.map((page) => (
              <li
                className={`paginationPageNumber ${
                  currentPage === page ? "activePage" : ""
                }`}
                onClick={() => paginate(page)}
              >
                {page}
              </li>
            ))}
          </ul>
          <button
            className="paginationNextPage"
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage * dataPerPage >= data.length}
          >
            Next Page
          </button>
        </div>
      </div>
    );
  }
);

export default Pagination;
