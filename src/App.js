import './App.css'
import Navbar from './components/Navbar'
import Main from './Main'
import { useState } from 'react'

function App() {
  // state for tabs -- all, hidden
  const [page, setPage] = useState('all')

  // state for NFT per page count
  const [count, setCount] = useState('20')

  // state for NFT Api call
  const [nftArr, setNftArr] = useState([])

  // state for search input box
  const [search, setSearch] = useState('')

  // state for page numbers
  const [pageNum, setPageNum] = useState(1)

  // state for sort -- ascending or descending
  const [sortToggle, setSortToggle] = useState('Ascending')

  // states for forSale toggle
  const [forSale, setForSale] = useState(false)

  // state for letterFilterToggle (is it active or not)
  const [letterFilterActive, setLetterFilterActive] = useState(false)

  return (
    <>
      <Navbar
        setPage={setPage}
        setSortToggle={setSortToggle}
        setPageNum={setPageNum}
        setSearch={setSearch}
        setNftArr={setNftArr}
        search={search}
        setCount={setCount}
        page={page}
        setLetterFilterActive={setLetterFilterActive}
        setForSale={setForSale}
      />
      <div className="main-div">
        <Main
          page={page}
          count={count}
          setCount={setCount}
          sortToggle={sortToggle}
          setSortToggle={setSortToggle}
          pageNum={pageNum}
          setPageNum={setPageNum}
          nftArr={nftArr}
          setNftArr={setNftArr}
          setSearch={setSearch}
          search={search}
          letterFilterActive={letterFilterActive}
          setLetterFilterActive={setLetterFilterActive}
          setForSale={setForSale}
          forSale={forSale}
        />
      </div>
    </>
  )
}

export default App
