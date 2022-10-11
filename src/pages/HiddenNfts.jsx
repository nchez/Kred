import Dropdown from '../components/Dropdown'
import ForSaleToggle from '../components/ForSaleToggle'
import PageButtons from '../components/PageButtons'
import Search from '../components/Search'
import Sort from '../components/Sort'
import Loading from '../components/Loading'

export default function HiddenNfts({
  forSale,
  setForSale,
  setNftArr,
  pageNum,
  setPageNum,
  count,
  setCount,
  nftCards,
  nftArr,
  setSortToggle,
  sortToggle,
  setSearch,
  search,
}) {
  return (
    <>
      <h1 className="title">Hidden NFTs</h1>
      <Search
        setSearch={setSearch}
        search={search}
        forSale={forSale}
        setNftArr={setNftArr}
        hidden={true}
        setPageNum={setPageNum}
        count={count}
        pageNum={pageNum}
      />
      <div className="filters-div">
        <Dropdown setCount={setCount} />
        <ForSaleToggle
          setForSale={setForSale}
          forSale={forSale}
          setSortToggle={setSortToggle}
        />
        <Sort
          setNftArr={setNftArr}
          setSortToggle={setSortToggle}
          sortToggle={sortToggle}
        />
      </div>
      <PageButtons pageNum={pageNum} setPageNum={setPageNum} />
      {nftArr.length === 0 ? <Loading /> : null}
      <div className="nft-display-div">{nftCards}</div>
    </>
  )
}
