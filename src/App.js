import './App.css'
import Navbar from './components/Navbar'
import Main from './Main'
import { useState } from 'react'

function App() {
  // state for tabs -- all, hidden
  const [page, setPage] = useState('all')

  // state for page numbers
  const [pageNum, setPageNum] = useState(1)
  // state for sort -- ascending or descending
  const [sortToggle, setSortToggle] = useState('Ascending')
  return (
    <>
      <Navbar
        setPage={setPage}
        setSortToggle={setSortToggle}
        setPageNum={setPageNum}
      />
      <div className="main-div">
        <Main
          page={page}
          sortToggle={sortToggle}
          setSortToggle={setSortToggle}
          pageNum={pageNum}
          setPageNum={setPageNum}
        />
      </div>
    </>
  )
}

export default App
