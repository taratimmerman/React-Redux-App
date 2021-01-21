import React, { useEffect } from 'react';
import { getRmChar } from './actions/rmcActions';
import { connect } from 'react-redux';
import './App.css';
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRmChar());
  }, [dispatch]);
  const chars = useSelector((state) => state.rmChars);

  return (
    <>
      <h1>Rick and Morty Characters</h1>
      <div className='char-container'>
        {chars.map((char) => {
          return (
            <div className='char-card'>
            <h2>{char.name}</h2>
            <img alt='pic' src={char.image}></img>
            <div className='info'>
                <p>{`Status: ${char.status}`}</p>
                <p>{`Species: ${char.species}`}</p>
            </div>
        </div>
          );
        })}
      </div>
    </>
  );
}

export default App;