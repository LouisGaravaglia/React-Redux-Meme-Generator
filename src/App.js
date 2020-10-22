import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import './App.css';

function App() {
    const memes = useSelector(state => state.memes);
    const dispatch = useDispatch();

    function addMeme(newMeme) {
    dispatch({ type: "ADD_MEME", meme: newMeme });
  }

  function deleteMeme(id) {
    dispatch({type: "REMOVE_MEME", id });
  }

  return (
    <div className="App">
    <NewMemeForm addMeme={addMeme} />
    <hr/>
     { memes.map(meme => <Meme key={meme.id} topText={meme.topText} bottomText={meme.bottomText} url={meme.url} deleteMeme={() => deleteMeme(meme.id)}/>)}
    </div>
  );
}

export default App;
