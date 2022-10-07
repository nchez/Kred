export default function NameFilter({
  handleLetterFilter,
  setLetterFilterToggle,
  letterFilterToggle,
}) {
  return (
    <div className="letter-filter-div">
      First Letter Filter
      <div className="letter-input-div">
        <input
          type="text"
          id="firstLetter"
          name="firstLetter"
          placeholder="letter to filter"
          onChange={(e) => handleLetterFilter(e)}
        />
        <button
          className="letter-toggle"
          onClick={() => setLetterFilterToggle((state) => !state)}
        >
          {letterFilterToggle ? 'ON' : 'OFF'}
        </button>
      </div>
    </div>
  )
}
