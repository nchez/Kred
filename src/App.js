import './App.css'
import Navbar from './components/Navbar'
import Main from './Main'
import { useState } from 'react'

function App() {
  const [page, setPage] = useState('all')
  // state for sort -- ascending or descending
  const [sortToggle, setSortToggle] = useState('Ascending')
  return (
    <>
      <Navbar setPage={setPage} setSortToggle={setSortToggle} />
      <div className="main-div">
        <Main
          page={page}
          sortToggle={sortToggle}
          setSortToggle={setSortToggle}
        />
      </div>
    </>
  )
}

export default App
