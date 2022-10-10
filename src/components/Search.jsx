import { useCallback } from 'react'
const axios = require('axios').default

export default function Search({
  hidden,
  setNftArr,
  forSale,
  count,
  setPageNum,
  search,
  setSearch,
}) {
  // handler for search input
  const handleChange = useCallback(
    (e) => {
      setSearch(e.target.value)
    },
    [setSearch]
  )

  // handler for search submit
  const handleSearch = useCallback(() => {
    setPageNum(1)
    setNftArr([])
    const options = {
      method: 'GET',
      url: `https://api.nft.kred/nft/nfts?token=${
        process.env.REACT_APP_API_KEY
      }&${hidden ? 'hidden=true&' : ''}&${forSale ? 'onsale=true&' : ''}
        search=${search}&count=${count}&page=${1}`,
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
  }, [hidden, setNftArr, count, search, forSale, setPageNum])

  return (
    <div className="search-div">
      <input
        type="text"
        placeholder="enter search terms.."
        name="search"
        value={search}
        onChange={handleChange}
      />
      <button type="submit" onClick={handleSearch}>
        Search
      </button>
    </div>
  )
}
