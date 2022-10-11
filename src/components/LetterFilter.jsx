import { useState, useCallback } from 'react'

export default function LetterFilter({ setNftArr, setLetterFilterActive }) {
  // state for letterfilter toggle and string
  const [letterFilterToggle, setLetterFilterToggle] = useState(false) // is letterfilter toggle active?
  const [firstLetterFilter, setFirstLetterFilter] = useState('') // letter filter string

  // handler for first letter filter input
  const handleLetterFilter = useCallback(
    (e) => {
      setFirstLetterFilter(e.target.value)
    },
    [setFirstLetterFilter]
  )

  return (
    <div className="letter-filter-div">
      First Letter Filter
      <div className="letter-input-div">
        <input
          type="text"
          id="firstLetter"
          name="firstLetter"
          placeholder="letter to filter"
          onChange={handleLetterFilter}
        />
        <button
          className="letter-toggle"
          onClick={() => {
            setLetterFilterToggle((state) => !state)
            setLetterFilterActive((state) => !state)
          }}
        >
          {letterFilterToggle ? 'ON' : 'OFF'}
        </button>
      </div>
    </div>
  )
}
