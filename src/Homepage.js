import './general.css'
import MemoryCard from './MemoryCard'

import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";

function Homepage({memories})
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
            <Hippocampus memories={memories}></Hippocampus>
        </div>
    );
}

function Hippocampus({memories})
{
    return (
        <div>
            {
                memories.map((mem) => (
                    <MemoryCard date={mem.date} text={mem.text} onClick={memoryCardClicked}></MemoryCard>
                ))
            }
        </div>
    );
}

function memoryCardClicked(e)
{
    console.log("test");
}

export default Homepage;