import './general.css'

import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";

function Homepage()
{
    return (
        <div className='background'>
            <h1 className="center header">Reminisce</h1>
            <div className="center">
                <button className='btn'>Write Message</button>
            </div>
        </div>
    );
}

function WriteMessage()
{

}

export default Homepage;