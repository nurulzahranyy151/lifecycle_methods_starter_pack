import { useState } from 'react'
import ListMovie from './ListMovie.jsx'
import './App.css'
import Modal from './Components/Modal/Modal'

function App() {
  const [search, setSearch] = useState('')
  const [showListMovie, setShowListMovie] = useState(true)
  const onChangeText = (e) => {
    setText(e.target.value)
  }
  const onClickSearch = () => {
    setSearch(text)
  }

  return (
    <>
      <h1>Hands-on Lifecycle Methods</h1>
      <div className="search">
        <label>
          Search movie
          <input onChange={onChangeText} type="text" />
        </label>
      </div>
        <button className="btn-show" onClick={() => setShowListMovie(!showListMovie)}> Show List Movie
        </button>
      {showListMovie && <ListMovie search={search}/>}
      
    
    </>
  )
}

export default App
