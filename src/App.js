import './App.css'
import Navbar from './components/Navbar'
import Main from './pages/Main'
import { useState } from 'react'

function App() {
  const [page, setPage] = useState('all')
  return (
    <>
      <Navbar setPage={setPage} />
      <div className="main-div">
        <Main page={page} />
      </div>
    </>
  )
}

export default App
