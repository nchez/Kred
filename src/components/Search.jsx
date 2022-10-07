import { useState } from 'react'
const axios = require('axios').default

export default function Search({ hidden, setNftArr, forSale, count, pageNum }) {
  const [search, setSearch] = useState('')

  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  const handleSearch = () => {
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
          console.log('nft call made')
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
          console.log('nft call made')
          console.log(response.data.nfts)
          setNftArr(response.data.nfts)
        })
        .catch(function (error) {
          console.error(error)
        })
    }
  }
  return (
    <div className="search-div">
      <input
        type="text"
        placeholder="enter search terms.."
        name="search"
        onChange={(e) => handleChange(e)}
      />
      <button type="submit" onClick={handleSearch}>
        Search
      </button>
    </div>
  )
}
