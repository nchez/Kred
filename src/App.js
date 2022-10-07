import './App.css'
import Navbar from './components/Navbar'
import All from './pages/All'
import Hidden from './pages/Hidden'
import { useState } from 'react'

function App() {
  const [page, setPage] = useState('all')
  return (
    <>
      <Navbar setPage={setPage} />
      <div className="main-div">{page === 'all' ? <All /> : <Hidden />}</div>
    </>
  )
}

export default App
