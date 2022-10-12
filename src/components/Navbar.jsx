import { useCallback } from 'react'
const axios = require('axios').default

export default function Navbar({
  page,
  setPage,
  setSortToggle,
  setPageNum,
  setSearch,
  setCount,
  setNftArr,
  setLetterFilterActive,
  setForSale,
}) {
  // handler for navbar clicks -- change page to selected tab and reset sort to default (ascending)
  const handleNavClick = useCallback(
    (targetPage) => {
      setPage(targetPage)
      setSortToggle('Ascending')
      setPageNum(1)
      setCount(20)
      setSearch('')
      setNftArr([])
      setForSale(false)
      setLetterFilterActive(false)
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
    [
      setPage,
      setSortToggle,
      setPageNum,
      setSearch,
      setNftArr,
      page,
      setCount,
      setLetterFilterActive,
      setForSale,
    ]
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
