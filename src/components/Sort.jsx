import { useCallback } from 'react'

export default function Sort({ setNftArr, sortToggle, setSortToggle }) {
  // handler for sorting by created time
  const handleSort = useCallback(() => {
    if (sortToggle === 'Ascending') {
      setSortToggle('Descending')
      setNftArr((state) => {
        return state
          .slice()
          .sort((a, b) => Date.parse(b.created) - Date.parse(a.created))
      })
    } else {
      setSortToggle('Ascending')
      setNftArr((state) => {
        return state
          .slice()
          .sort((a, b) => Date.parse(a.created) - Date.parse(b.created))
      })
    }
  }, [setSortToggle, setNftArr, sortToggle])
  return (
    <div className="sort-div">
      <div className="sort-time">
        <button onClick={handleSort}>
          Sort by Created Time{' '}
          {sortToggle === 'Ascending' ? (
            <span>&#8593;</span>
          ) : (
            <span>&#8595;</span>
          )}
        </button>
      </div>
    </div>
  )
}
