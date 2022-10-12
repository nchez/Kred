export default function Loading() {
  return (
    <div className="d-flex justify-content-center loading-div">
      <div className="spinner-border" role="status"></div>
      <span
        className="sr-only"
        style={{ marginLeft: '10px', fontSize: '20px' }}
      >
        Loading...
      </span>
    </div>
  )
}
