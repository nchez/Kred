import { useEffect } from 'react'

export default function NameFilter({
  handleLetterFilter,
  setNftArr,
  letterFilterToggle,
  setLetterFilterToggle,
  firstLetterFilter,
}) {
  useEffect(() => {
    if (letterFilterToggle) {
      if (firstLetterFilter !== '') {
        setNftArr((state) =>
          state.filter(
            (element) => element.name.charAt(0) === firstLetterFilter
          )
        )
      }
    }
  }, [letterFilterToggle, firstLetterFilter, setNftArr])
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
          onClick={() => {
            setLetterFilterToggle((state) => !state)
          }}
        >
          {letterFilterToggle ? 'ON' : 'OFF'}
        </button>
      </div>
    </div>
  )
}
