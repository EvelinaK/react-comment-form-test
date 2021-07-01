import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Form from "./components/Form/form";
import CommentList from "./components/CommentList/commentList.container";
import operations from "./redux/operations";
import {
  getVisibleComments,
  getAllCont,
  getAllComments,
} from "./redux/selectors";

function App() {
  const [offset, setOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [lastLoadedPage, setLastLoadedPage] = useState(1);
  const dispatch = useDispatch();
  const items = useSelector(getAllCont);

  useEffect(() => {
    dispatch(operations.getComment(offset));
    setPageCount(Math.ceil(items.links?.length));
  }, [dispatch, offset, items.length]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected + 1;
    setOffset(selectedPage);
    setLastLoadedPage(selectedPage);
  };

  const handlePageMore = () => {
    setLastLoadedPage(lastLoadedPage + 1);
    dispatch(operations.showMoreComments(lastLoadedPage + 1));
  };

  return (
    <div className="App">
      <>
        <h1>Comment form</h1>
        <Form />
        <h2>Comments</h2>
        {<CommentList />}
      </>
      {lastLoadedPage < items.last_page && (
        <button className="button" type="button" onClick={handlePageMore}>
          Загрузить ещё{" "}
        </button>
      )}
      <>
        {items && (
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        )}
      </>
    </div>
  );
}

export default App;
