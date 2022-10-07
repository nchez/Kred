import { useCallback } from 'react'

export default function Dropdown({ setCount, count }) {
  // handler function for updating nfts per page from dropdown
  const handleCountChange = useCallback(
    (e) => {
      setCount(e.target.value)
    },
    [setCount]
  )
  return (
    <div className="dropdown-div">
      <div className="dropdown-label">
        <label>NFTs per page</label>
      </div>
      <div className="dropdown-select">
        <select value={count} onChange={handleCountChange}>
          <option value={20}>20</option>
          <option value={40}>40</option>
          <option value={60}>60</option>
        </select>
      </div>
    </div>
  )
}
