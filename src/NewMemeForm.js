import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import './App.css';

function NewMemeForm({ addMeme }) {
    const INITIAL_VALUE = {url:"", topText:"", bottomText:""};
    const [formData, setFormData] = useState(INITIAL_VALUE);
    const dispatch = useDispatch();
    const count = useSelector(store => store.id_keeper)
    const handleChange = (e) => {
        const {name, value }= e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: "INCREMENT_ID"});
        console.log("MEME ID: ", count);
        addMeme({...formData, id: count});
        setFormData(INITIAL_VALUE);
    }
  return (
    <div className="NewMemeForm">
        <form onSubmit={handleSubmit}>
            <label class="FormLabel">Image Source</label>
            <input
                type="text"
                name="url"
                value={formData.url}
                placeholder="Image file name"
                onChange={handleChange}
            />
            <label>Top Text</label>
            <input
                type="text"
                name="topText"
                value={formData.topText}
                placeholder="Text that will go on the top of the meme"
                onChange={handleChange}
            />
            <label>Bottom Text</label>
            <input
                type="text"
                name="bottomText"
                value={formData.bottomText}
                placeholder="Text that will go on the bottom of the meme"
                onChange={handleChange}
            />
            <button className="FormButton">Submit</button>
        </form>
    </div>
  );
}

export default NewMemeForm;
