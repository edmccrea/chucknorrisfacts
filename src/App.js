import './App.scss';
import { useState, useEffect } from 'react';
import chuckImg from './static/chucknorris.png';
import axios from 'axios';

import Dropdown from './components/Dropdown';
import Modal from './components/Modal';

function App() {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState('');
  const [category, setCategory] = useState('default');
  const [joke, setJoke] = useState([]);
  const [showModal, setShowModal] = useState(false);

  //Create function to set categories and call on page load
  const getCategories = async () => {
    const { data } = await axios.get(
      'https://api.chucknorris.io/jokes/categories'
    );
    setCategories(data);
    setLoading(false);
  };

  useEffect(() => {
    getCategories();
  }, []);

  //Create a function to get joke by category
  const getJoke = async () => {
    const { data } = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
    setJoke(data);
  };

  //Create a function to handle button click and display joke
  const clickHandler = () => {
    if (!category) {
      console.log('select a category');
      return;
    }
    getJoke();
    setShowModal(true);
  };

  //Create a function to handle modal display
  const modalHandler = () => {
    if (showModal) {
      setShowModal(false);
      setJoke('');
      document.body.style.overflow = 'scroll';
    }

    if (!showModal) {
      setShowModal(true);
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <div className='container'>
      <img src={chuckImg} alt='' className='chuck-img' />
      <h1 className='main-title'>Chuck Norris Facts</h1>
      <p className='info-text'>
        Welcome to the Chuck Norris fact generator. Go ahead and pick a category
        and find yourself a completely 100% factually correct quote about Chuck
        Norris.
      </p>
      {loading ? (
        <p className='loading'>Loading...</p>
      ) : (
        <>
          <Dropdown categories={categories} setCategory={setCategory} />
          {category !== 'default' ? (
            <button className='btn joke-btn' onClick={clickHandler}>
              Inform Me
            </button>
          ) : (
            <></>
          )}
        </>
      )}
      {showModal && joke.value && (
        <Modal joke={joke} modalHandler={modalHandler} />
      )}
      <p className='footer-text'>
        Built using the Chuck Norris facts api. For more visit
        api.chucknorris.io
      </p>
    </div>
  );
}

export default App;
