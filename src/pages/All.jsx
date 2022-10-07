import { useEffect, useState } from 'react'
import ForSaleToggle from '../components/ForSaleToggle'
import NameFilter from '../components/NameFilter'
import NftCard from '../components/NftCard'
const axios = require('axios').default

export default function All() {
  const [forSale, setForSale] = useState(false)
  const [letterFilterToggle, setLetterFilterToggle] = useState(false)
  const [firstLetterFilter, setFirstLetterFilter] = useState('')
  const [count, setCount] = useState(20)
  const [page, setPage] = useState(1)
  const [nftArr, setNftArr] = useState([])

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
  //   const handleLetterFilterToggle = () => {
  //     console.log('handleletterfilter toggle hit')
  //     if (firstLetterFilter !== '') {
  //       console.log('filter hit')
  //       const tempArr = nftArr.slice()
  //       setNftArr(
  //         tempArr.filter(
  //           (element) => element.name.charAt(0) === firstLetterFilter
  //         )
  //       )
  //     }
  //   }

  // trigger api calls when count and/or page changes
  useEffect(() => {
    if (!letterFilterToggle) {
      const options = {
        method: 'GET',
        url: `https://api.nft.kred/nft/nfts?token=${process.env.REACT_APP_API_KEY}&onsale=${forSale}&batched=true&count=${count}&page=${page}`,
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
  }, [count, page, forSale, letterFilterToggle])

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
      />
    )
  })

  return (
    <>
      <h1>All NFTs</h1>
      <div className="filters-div">
        {dropdown}
        <ForSaleToggle handleForSale={handleForSale} forSale={forSale} />
        <NameFilter
          handleLetterFilter={handleLetterFilter}
          firstLetterFilter={firstLetterFilter}
          setLetterFilterToggle={setLetterFilterToggle}
          letterFilterToggle={letterFilterToggle}
          setNftArr={setNftArr}
          nftArr={nftArr}
        />
      </div>
      <div className="nft-display-div">{nftCards}</div>
    </>
  )
}
