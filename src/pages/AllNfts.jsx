import Dropdown from '../components/Dropdown'
import ForSaleToggle from '../components/ForSaleToggle'
import PageButtons from '../components/PageButtons'
import Search from '../components/Search'
import LetterFilter from '../components/LetterFilter'
import Sort from '../components/Sort'
import Loading from '../components/Loading'

export default function AllNfts({
  setNftArr,
  pageNum,
  setPageNum,
  count,
  setCount,
  letterFilterActive,
  setLetterFilterActive,
  forSale,
  setForSale,
  nftCards,
  nftArr,
  setSortToggle,
  sortToggle,
  setSearch,
  search,
}) {
  return (
    <>
      <h1 className="title">All NFTs</h1>
      <Search
        forSale={forSale}
        setNftArr={setNftArr}
        hidden={false}
        setPageNum={setPageNum}
        count={count}
        setSearch={setSearch}
        search={search}
      />
      <div className="filters-div">
        <Dropdown setCount={setCount} count={count} />
        {/* {!letterFilterActive ? (
          <ForSaleToggle
            setForSale={setForSale}
            forSale={forSale}
            setSortToggle={setSortToggle}
          />
        ) : null} */}
        <ForSaleToggle
          setForSale={setForSale}
          forSale={forSale}
          setSortToggle={setSortToggle}
        />
        <LetterFilter
          setNftArr={setNftArr}
          setLetterFilterActive={setLetterFilterActive}
          letterFilterActive={letterFilterActive}
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
