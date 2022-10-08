import { useEffect, useState } from 'react'
import ForSaleToggle from '../components/ForSaleToggle'
import NameFilter from '../components/NameFilter'
import NftCard from '../components/NftCard'
import Search from '../components/Search'
import PageButtons from '../components/PageButtons'
import Sort from '../components/Sort'
const axios = require('axios').default

export default function All({ page }) {
  const [forSale, setForSale] = useState(false)
  const [letterFilterToggle, setLetterFilterToggle] = useState(false) // is letterfilter toggle active?
  const [firstLetterFilter, setFirstLetterFilter] = useState('') // letter filter string
  const [sortToggle, setSortToggle] = useState(true)
  const [sortClear, setSortClear] = useState(true)
  const [count, setCount] = useState(20)
  const [pageNum, setPageNum] = useState(1)
  const [nftArr, setNftArr] = useState([])

  // handler function for updating nfts per page from dropdown
  const handleCountChange = (e) => {
    setCount(e.target.value)
  }

  // handler function for toggling forSale buttons
  const handleForSale = (e) => {
    setForSale((state) => !state)
  }

  // handler for first letter filter input
  const handleLetterFilter = (e) => {
    setFirstLetterFilter(e.target.value)
  }

  // handlers for page buttons
  const handlePrevPage = () => {
    setPageNum((page) => page - 1)
  }
  const handleNextPage = () => {
    setPageNum((page) => page + 1)
  }

  // handler for sorting by created time
  const handleSort = () => {
    if (sortToggle && !sortClear) {
      setNftArr((state) =>
        state.sort((a, b) => Date.parse(a.created) - Date.parse(b.created))
      )
    } else if (!sortClear) {
      setNftArr((state) =>
        state.sort((a, b) => Date.parse(b.created) - Date.parse(a.created))
      )
    }
  }

  // handler for sort clear
  const handleClear = () => {
    setSortClear((state) => true)
    setNftArr((state) =>
      state.sort((a, b) => Date.parse(a.created) - Date.parse(b.created))
    )
  }

  // trigger api calls when count and/or page changes
  useEffect(() => {
    // api call for all nft tab
    if (!letterFilterToggle && page === 'all') {
      const options = {
        method: 'GET',
        url: `https://api.nft.kred/nft/nfts?token=${
          process.env.REACT_APP_API_KEY
        }&${
          forSale ? 'onsale=true&' : ''
        }batched=true&count=${count}&page=${pageNum}`,
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
    // api call for hidden nft tab
    if (!letterFilterToggle && page === 'hidden') {
      const options = {
        method: 'GET',
        url: `https://api.nft.kred/nft/nfts?token=${
          process.env.REACT_APP_API_KEY
        }&hidden=true&${
          forSale ? 'onsale=true&' : ''
        }batched=true&count=${count}&page=${pageNum}`,
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
  }, [count, pageNum, forSale, letterFilterToggle, page])

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
  const nftCards = nftArr.map((element) => {
    return (
      <NftCard
        image={element.face}
        name={element.name}
        key={`${element.uuid}`}
        creatorName={element.creator_details.name}
        creatorAvatar={element.creator_details.avatar}
        date={element.created}
      />
    )
  })

  const allNfts = (
    <>
      <h1>All NFTs</h1>
      <Search
        forSale={forSale}
        setNftArr={setNftArr}
        hidden={false}
        setPageNum={setPageNum}
        count={count}
        page={page}
      />
      <div className="filters-div">
        {dropdown}
        {!letterFilterToggle ? (
          <ForSaleToggle handleForSale={handleForSale} forSale={forSale} />
        ) : null}
        <NameFilter
          handleLetterFilter={handleLetterFilter}
          firstLetterFilter={firstLetterFilter}
          setLetterFilterToggle={setLetterFilterToggle}
          letterFilterToggle={letterFilterToggle}
          setNftArr={setNftArr}
          nftArr={nftArr}
        />
        <Sort
          setSortClear={setSortClear}
          setSortToggle={setSortToggle}
          sortClear={sortClear}
          sortToggle={sortToggle}
          handleSort={handleSort}
          handleClear={handleClear}
        />
      </div>
      <PageButtons
        pageNum={pageNum}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
      <div className="nft-display-div">{nftCards}</div>
    </>
  )

  const hiddenNfts = (
    <>
      <h1>Hidden NFTs</h1>
      <Search
        forSale={forSale}
        setNftArr={setNftArr}
        hidden={false}
        setPageNum={setPageNum}
        count={count}
        page={page}
      />
      <div className="filters-div">
        {dropdown}
        <ForSaleToggle handleForSale={handleForSale} forSale={forSale} />
      </div>
      <PageButtons
        pageNum={pageNum}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
      <div className="nft-display-div">{nftCards}</div>
    </>
  )

  return <>{page === 'all' ? allNfts : hiddenNfts}</>
}
