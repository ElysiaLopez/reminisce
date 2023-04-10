import React, { useState } from "react";
import {Link} from "react-router-dom"

import './general.css'

function WriteMessage()
{
    const[file, setFile] = useState();

    //setFile("cat.jpg")

    function handleChange(e)
    {
        setFile(URL.createObjectURL(e.target.files[0])); 
    }

    function clearImage(e)
    {
        setFile(null);
    }

    function saveMemory(e)
    {
        console.log("hello!");
    }

    return (
        <div className='background'>
            <h1 className='header2'>Write your message:</h1>
            <div className='center'>
                <textarea className="txtarea"></textarea>
                <div className='sidebar margin10'>
                    <h3 className="margin10">Current date:</h3>
                    <input className="margin10" type="date"></input>
                    <h3 className="margin10">Reveal date:</h3>
                    <input className="margin10" type="date"></input>
                    <h3 className = 'margin10'>Upload Image (optional):</h3>
                    <input className="center margin10" type="file" onChange={handleChange} accept=".png, .jpg"></input>
                    <img className="myImage" src={file} alt="emptyInput"></img>
                    <button onClick={clearImage}>Remove image</button>
                </div>
            </div>
            <Link to="/">
                <button className='btn center savememory' onClick={saveMemory}>Save Memory</button>
            </Link>
        </div>
    );
}

export default WriteMessage