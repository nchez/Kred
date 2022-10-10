import Dropdown from '../components/Dropdown'
import ForSaleToggle from '../components/ForSaleToggle'
import PageButtons from '../components/PageButtons'
import Search from '../components/Search'
import LetterFilter from '../components/LetterFilter'
import Sort from '../components/Sort'
import Loading from '../components/Loading'
import { useEffect } from 'react'

export default function AllNfts({
  setNftArr,
  pageNum,
  setPageNum,
  setCount,
  letterFilterActive,
  setLetterFilterActive,
  forSale,
  setForSale,
  nftCards,
  nftArr,
  setSortToggle,
  sortToggle,
  setPage,
}) {
  useEffect(() => {
    console.log('setPage triggered AllNfts useEffect')
  }, [setPage])
  return (
    <>
      <h1 className="title">All NFTs</h1>

      <div className="filters-div">
        <Dropdown setCount={setCount} />
        {!letterFilterActive ? (
          <ForSaleToggle
            setForSale={setForSale}
            forSale={forSale}
            setSortToggle={setSortToggle}
          />
        ) : null}
        <LetterFilter
          setNftArr={setNftArr}
          setLetterFilterActive={setLetterFilterActive}
        />
        <Sort
          setNftArr={setNftArr}
          sortToggle={sortToggle}
          setSortToggle={setSortToggle}
        />
      </div>
      <PageButtons pageNum={pageNum} setPageNum={setPageNum} />
      {nftArr.length === 0 ? <Loading /> : null}
      <div className="nft-display-div">{nftCards}</div>
    </>
  )
}
