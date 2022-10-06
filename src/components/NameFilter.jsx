export default function NameFilter({
  handleLetterFilter,
  setLetterFilterToggle,
  letterFilterToggle,
}) {
  return (
    <div className="letter-filter-div">
      <div className="letter-input-div">
        <label for="firstLetter">First Letter Filter</label>
        <input
          type="text"
          id="firstLetter"
          name="firstLetter"
          placeholder="letter to filter"
          onChange={(e) => handleLetterFilter(e)}
        />
      </div>
      <button
        className="letter-toggle"
        onClick={() => setLetterFilterToggle((state) => !state)}
      >
        {letterFilterToggle ? 'ON' : 'OFF'}
      </button>
    </div>
  )
}
