import React from 'react';
import './App.css';

function Meme({topText, bottomText, url, deleteMeme}) {

  return (
    <div className="MemeContainer">
    <div className="Meme">
    <h3 className="MemeTopText">{topText}</h3>
      <img className="MemeImage" src={url}/>
      <h3 className="MemeBottomText">{bottomText}</h3>
      <button className="MemeButton" onClick={deleteMeme}>Remove</button>
    </div>
    </div>
  );
}

export default Meme;
