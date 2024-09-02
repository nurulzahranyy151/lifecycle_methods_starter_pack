import { useState } from 'react';
import ListMovie from './ListMovie.jsx';
import './App.css';
import Modal from './Modal/Modal';

function App() {
  const [search, setSearch] = useState('');
  const [showListMovie, setShowListMovie] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onChangeText = (e) => {
    setSearch(e.target.value);
  }

  const toggleModal = (state) => {
    setIsModalOpen(state);
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
      <button className="btn-show" onClick={() => setShowListMovie(!showListMovie)}>
        Show List Movie
      </button>
      {showListMovie && <ListMovie search={search} toggleModal={toggleModal} />}
      {isModalOpen && <Modal toggleModal={toggleModal} />}
    </>
  );
}

export default App;
