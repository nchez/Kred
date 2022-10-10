import { useCallback } from 'react'

export default function Navbar({ setPage, setSortToggle, setPageNum }) {
  // handler for navbar clicks -- change page to selected tab and reset sort to default (ascending)
  const handleNavClick = useCallback(
    (page) => {
      setPage(page)
      setSortToggle('Ascending')
      setPageNum(1)
    },
    [setPage, setSortToggle, setPageNum]
  )
  return (
    <nav className="nav-bar">
      <ul
        className="nav nav-tabs justify-content-center"
        id="myTab"
        role="tablist"
      >
        <li
          className="nav-item"
          role="presentation"
          onClick={() => {
            handleNavClick('all')
          }}
        >
          <button
            className="nav-link active"
            id="all-tab"
            data-bs-toggle="tab"
            data-bs-target="#all"
            type="button"
            role="tab"
            aria-controls="all"
            aria-selected="true"
          >
            All NFTs
          </button>
        </li>
        <li
          className="nav-item"
          role="presentation"
          onClick={() => {
            handleNavClick('hidden')
          }}
        >
          <button
            className="nav-link"
            id="hidden-tab"
            data-bs-toggle="tab"
            data-bs-target="#hidden"
            type="button"
            role="tab"
            aria-controls="hidden"
            aria-selected="false"
          >
            Hidden NFTs
          </button>
        </li>
      </ul>
    </nav>
  )
}
