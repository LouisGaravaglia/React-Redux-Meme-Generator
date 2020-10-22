import React from 'react';
import './App.css';

function Memes() {

    const addMeme = () => {
        dispatch({type:"ADD_MEME"});
    }

  return (
    <div className="Memes">

    </div>
  );
}

export default Memes;
