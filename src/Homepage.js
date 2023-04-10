import './general.css'
import MemoryCard from './MemoryCard'

import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";

function Homepage()
{
    return (
        <div className='background'>
            <div className='center'>
                <div style={{display: "inline-block"}}>
                    <h1 className="header">Reminisce</h1>
                    <Link to="/WriteMessage">
                        <button className='btn'>Create Memory</button>
                    </Link>
                </div>
            </div>
            <hr className='headerline'></hr>
            <Hippocampus></Hippocampus>
        </div>
    );
}

class Memory{
    constructor(date, text, pic = null)
    {
        this.date = date;
        this.text = text;
        this.pic = pic;
    }
}

function Hippocampus()
{
    const [memories, setMemories] = useState(new Array());

    return (
        <MemoryCard></MemoryCard>
    );
}

export default Homepage;