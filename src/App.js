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
      {page === 'all' ? <All /> : <Hidden />}
    </>
  )
}

export default App
