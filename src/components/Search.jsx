import { useState, useCallback } from 'react'
const axios = require('axios').default

export default function Search({ hidden, setNftArr, forSale, count, pageNum }) {
  // state for search input box
  const [search, setSearch] = useState('')

  // handler for search input
  const handleChange = useCallback(
    (e) => {
      setSearch(e.target.value)
    },
    [setSearch]
  )

  // handler for search submit -- cannot get working with API
  const handleSearch = useCallback(() => {
    if (!hidden) {
      const options = {
        method: 'GET',
        url: `https://api.nft.kred/nft/nfts?token=${
          process.env.REACT_APP_API_KEY
        }&${
          forSale ? 'onsale=true&' : ''
        }batched=true&search=${search}&count=${count}&page=${pageNum}`,
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
    }
    if (hidden) {
      const options = {
        method: 'GET',
        url: `https://api.nft.kred/nft/nfts?token=${
          process.env.REACT_APP_API_KEY
        }&hidden=${true}search=${search}&onsale=${forSale}&batched=true&count=${count}&page=${pageNum}`,
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
    }
  }, [hidden, setNftArr, count, forSale, pageNum, search])

  return (
    <div className="search-div">
      <input
        type="text"
        placeholder="enter search terms.."
        name="search"
        onChange={handleChange}
      />
      <button type="submit" onClick={handleSearch}>
        Search
      </button>
    </div>
  )
}
