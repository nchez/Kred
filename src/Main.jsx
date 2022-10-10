import { useEffect, useState } from 'react'
import NftCard from './components/NftCard'
import AllNfts from './pages/AllNfts'
import HiddenNfts from './pages/HiddenNfts'
import Search from './components/Search'

const axios = require('axios').default

export default function Main({
  hidden,
  page,
  sortToggle,
  setSortToggle,
  setPageNum,
  pageNum,
  setNftArr,
  nftArr,
  count,
  setCount,
  setSearch,
  setPage,
}) {
  // states for forSale toggle
  const [forSale, setForSale] = useState(false)

  // state for letterFilterToggle (is it active or not)
  const [letterFilterActive, setLetterFilterActive] = useState(false)

  // trigger api calls when count and/or page changes
  useEffect(() => {
    setNftArr([])
    // api call for all nft tab
    // do not trigger api call when letterfiltertoggle is on
    if (!letterFilterActive) {
      const options = {
        method: 'GET',
        url: `https://api.nft.kred/nft/nfts?token=${
          process.env.REACT_APP_API_KEY
        }&${page === 'hidden' ? 'hidden=true&' : ''}${
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
  }, [count, pageNum, forSale, page, letterFilterActive, setNftArr])

  useEffect(() => {
    console.log('Main useEffect triggered by setPage.')
  }, [setPage])

  // map over nftArr to create Nft cards
  const nftCards = nftArr?.map((element) => {
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

  return (
    <>
      <h1 className="title">{hidden ? 'Hidden' : 'All'} NFTs</h1>
      <Search
        forSale={forSale}
        setNftArr={setNftArr}
        hidden={hidden}
        setPageNum={setPageNum}
        count={count}
        setSearch={setSearch}
      />
      {page === 'all' ? (
        <AllNfts
          setNftArr={setNftArr}
          nftCards={nftCards}
          setCount={setCount}
          pageNum={pageNum}
          setPageNum={setPageNum}
          forSale={forSale}
          nftArr={nftArr}
          setForSale={setForSale}
          letterFilterActive={letterFilterActive}
          setLetterFilterActive={setLetterFilterActive}
          count={count}
          sortToggle={sortToggle}
          setSortToggle={setSortToggle}
          setSearch={setSearch}
          setPage={setPage}
        />
      ) : (
        <HiddenNfts
          hidden={false}
          nftCard={nftCards}
          forSale={forSale}
          setForSale={setForSale}
          setNftArr={setNftArr}
          nftArr={nftArr}
          pageNum={pageNum}
          setPageNum={setPageNum}
          count={count}
          setCount={setCount}
          nftCards={nftCards}
          sortToggle={sortToggle}
          setSortToggle={setSortToggle}
          setSearch={setSearch}
        />
      )}
    </>
  )
}
