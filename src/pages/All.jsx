import { useEffect, useState } from 'react'
import ForSaleToggle from '../components/ForSaleToggle'
import NameFilter from '../components/NameFilter'
const axios = require('axios').default

export default function All() {
  const [forSale, setForSale] = useState(false)
  const [letterFilterToggle, setLetterFilterToggle] = useState(false)
  const [nftCount, setNftCount] = useState(0)
  const [firstLetterFilter, setFirstLetterFilter] = useState('')
  const [count, setCount] = useState(20)
  const [page, setPage] = useState(1)
  const [nftArr, setNftArr] = useState([])

  const fetchNfts = (count, page) => {
    const options = {
      method: 'GET',
      url: `https://api.nft.kred/nft/nfts?token=${process.env.REACT_APP_API_KEY}&onsale=${forSale}&batched=true&count=${count}&page=${page}`,
      headers: { accept: 'application/json' },
    }
    const response = axios
      .request(options)
      .then(function (response) {
        console.log('nft call made')
        setNftArr(response.data.nfts)
        setTimeout(setNftCount(nftArr.length), 4000)
      })
      .catch(function (error) {
        console.error(error)
      })
  }

  // handler function for updating nfts per page from dropdown
  const handleCountChange = (e) => {
    setCount(e.target.value)
  }

  // handler function for toggling forSale buttons
  const handleForSale = (e) => {
    setForSale((state) => !state)
  }

  const handleLetterFilter = (e) => {
    setFirstLetterFilter(e.target.value)
  }

  // make initial api call with default count and page on component mount
  useEffect(() => {
    fetchNfts(count, page)
  }, [])

  // trigger api calls when count and/or page changes
  useEffect(() => {
    if (!letterFilterToggle) {
      fetchNfts(count, page)
    }
  }, [count, page, forSale, letterFilterToggle])

  // trigger filter when input is not null ('')
  useEffect(() => {
    if (letterFilterToggle && firstLetterFilter !== '') {
      const tempArr = nftArr.slice()
      setNftArr(
        tempArr.filter(
          (element) => element.name.charAt(0) === firstLetterFilter
        )
      )
      setTimeout(setCount(nftArr.length), 4000)
    }
  }, [firstLetterFilter, letterFilterToggle])

  const dropdown = (
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

  return (
    <>
      <h1>All NFTs</h1>
      <div className="filters-div">
        {dropdown}
        <ForSaleToggle handleForSale={handleForSale} forSale={forSale} />
        <NameFilter
          handleLetterFilter={handleLetterFilter}
          setLetterFilterToggle={setLetterFilterToggle}
          letterFilterToggle={letterFilterToggle}
        />
      </div>
      <div className="nft-display-div"></div>
    </>
  )
}
