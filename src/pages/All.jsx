import { useEffect, useState } from 'react'
const axios = require('axios').default

export default function All() {
  const [nftArr, setNftArr] = useState([])
  const fetchNfts = (count, page) => {
    const options = {
      method: 'GET',
      //   url: `https://api.nft.kred/nft/nfts?token=${process.env.REACT_APP_API_KEY}&batched=true&count=${count}&page=${page}`,
      url: `https://api.nft.kred/nft/nfts?token=${process.env.REACT_APP_API_KEY}&batched=true&count=20&page=1`,
      headers: { accept: 'application/json' },
    }
    const response = axios
      .request(options)
      .then(function (response) {
        setNftArr(response.data.nfts)
      })
      .catch(function (error) {
        console.error(error)
      })
  }

  useEffect(() => {
    fetchNfts()
  }, [])
  return <h1>All NFTs</h1>
}
