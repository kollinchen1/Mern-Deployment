import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PirateList from '../components/PirateList';
import {Link } from 'react-router-dom';
import './Main.css'
const Main = (props) => {
    const [pirates, setPirates] = useState([])
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        fetchData();
    }, []); 
    const fetchData = () =>{
        axios.get('http://localhost:8000/api/pirates')
            .then(res=>{
                setPirates(res.data.allPiratesArray.sort((a,b)=>a.name > b.name? 1:-1));
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }

    const removeFromDom = pirateId => {
        setPirates(pirates.filter(pirate => pirate._id !== pirateId));
    }


    return (
        <div>
            <h1 className="headerArea">
                Pirate Crew
                <Link to={"/pirate/new"}>
                    <button>Add Pirate</button>
                </Link>
            </h1>
            
            {loaded &&
            <div className="bodyArea">
                
                <PirateList pirates={pirates} removeFromDom={removeFromDom}/>
            </div>
        }
        </div>


    )
}

export default Main;
