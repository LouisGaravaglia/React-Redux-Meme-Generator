import React from 'react';
import './App.css';

function Meme({topText, bottomText, url, deleteMeme}) {

  return (
    <div className="Meme">
    <h3>{topText}</h3>
      <img src={url}/>
      <h3>{bottomText}</h3>
      <button onClick={deleteMeme}>Remove</button>
    </div>
  );
}

export default Meme;
