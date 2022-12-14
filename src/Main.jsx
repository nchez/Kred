import { useEffect } from 'react'
import NftCard from './components/NftCard'
import AllNfts from './pages/AllNfts'
import HiddenNfts from './pages/HiddenNfts'

const axios = require('axios').default

export default function Main({
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
  search,
  forSale,
  setForSale,
  letterFilterActive,
  setLetterFilterActive,
}) {
  // trigger api calls when count and/or page changes
  useEffect(() => {
    // when setting NftArr to [], loading screen will show up since nftArr.length is equal to zero
    if (!letterFilterActive) {
      setNftArr([])
    }
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
    if (letterFilterActive) {
      setNftArr((state) => {
        return state.filter((element) => element.name.charAt(0) === 'T')
      })
    }
  }, [count, pageNum, forSale, page, letterFilterActive, setNftArr])

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
          search={search}
        />
      ) : (
        <HiddenNfts
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
          search={search}
        />
      )}
    </>
  )
}
