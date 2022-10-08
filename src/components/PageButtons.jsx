export default function PageButtons({
  pageNum,
  handlePrevPage,
  handleNextPage,
}) {
  return (
    <>
      <h5>{pageNum}</h5>
      <div className="page-buttons-div">
        {pageNum > 1 ? (
          <>
            <button className="page-button" onClick={handlePrevPage}>
              Previous Page
            </button>
            <button className="page-button" onClick={handleNextPage}>
              Next Page
            </button>
          </>
        ) : (
          <>
            <button className="page-button" onClick={handleNextPage}>
              Next Page
            </button>
          </>
        )}
      </div>
    </>
  )
}
