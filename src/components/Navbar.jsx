import { useCallback } from 'react'
const axios = require('axios').default

export default function Navbar({
  setPage,
  setSortToggle,
  setPageNum,
  setSearch,
  setNftArr,
}) {
  // handler for navbar clicks -- change page to selected tab and reset sort to default (ascending)
  const handleNavClick = useCallback(
    (page) => {
      setPage(page)
      setSortToggle('Ascending')
      setPageNum(1)
      setSearch('')
      setNftArr([])
      const options = {
        method: 'GET',
        url: `https://api.nft.kred/nft/nfts?token=${
          process.env.REACT_APP_API_KEY
        }&${
          page === 'hidden' ? 'hidden=true&' : ''
        }batched=true&count=${20}&page=${1}`,
        headers: { accept: 'application/json' },
      }
      axios
        .request(options)
        .then(function (response) {
          setNftArr(response.data.nfts)
        })
        .catch(function (error) {
          console.error(error)
        })
    },
    [setPage, setSortToggle, setPageNum, setSearch, setNftArr]
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
