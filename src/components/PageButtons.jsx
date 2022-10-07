import { useCallback } from 'react'

export default function PageButtons({ pageNum, setPageNum }) {
  // handlers for page button clicks
  const handlePrevPage = useCallback(() => {
    setPageNum((page) => page - 1)
  }, [setPageNum])
  const handleNextPage = useCallback(() => {
    setPageNum((page) => page + 1)
  }, [setPageNum])

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
