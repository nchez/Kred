export default function Sort({
  setSortClear,
  setSortToggle,
  sortClear,
  sortToggle,
  handleSort,
  handleClear,
}) {
  const handleClick = () => {
    if (sortClear) {
      setSortClear((state) => !state)
    } else {
      setSortToggle((state) => !state)
    }
  }

  return (
    <div className="sort-div">
      <div className="sort-time">
        <button
          onClick={() => {
            handleClick()
            handleSort()
          }}
        >
          Sort by Created Time
        </button>
        {sortClear ? null : sortToggle ? <p>Descending</p> : <p>Ascending</p>}
      </div>
      <div className="sort-clear">
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  )
}
