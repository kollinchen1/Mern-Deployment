import React, { useState } from 'react';
import axios from 'axios';
import { useHistory} from "react-router-dom";
import {Link } from 'react-router-dom';


const Create = (props) => {
    const [dbErrors, setDBErrors] = useState([])
    const [name,setName] = useState("")
    const [imgUrl,setImgUrl] = useState("")
    const [numChest,setNumChest] = useState("")
    const [catchPhrase,setCatchPhrase] = useState("")
    const [position,setPosition] = useState("")
    const [pegleg, setPegleg] = useState(true);
    const [eyePatch, setEyePatch] = useState(true);
    const [hookHand, setHookHand] = useState(true);

    const history = useHistory();

    const onCreatePirate = e =>{
        e.preventDefault();

        const newPirate = {
            name:name,
            imgUrl:imgUrl,
            numChest:numChest,
            catchPhrase:catchPhrase,
            position:position,
            pegleg:pegleg,
            eyePatch:eyePatch,
            hookHand:hookHand
        }
        axios.post('http://localhost:8000/api/pirates', newPirate)
            .then(res=>{
                console.log(res.data);
                history.push("/");

            })
            .catch(err=>{
                console.log(err.response)
                const {errors} = err.response.data;
                const messages = Object.keys(errors).map( error => errors[error].message);
                setDBErrors(messages);
            })
        
    }
    return (
        <div>
            <h1 className="headerArea">
                Add Pirate
                <Link to={"/pirates"}>
                    <button>Crew Board</button>
                </Link>
            </h1>
            <div className="bodyArea">
            <form onSubmit={onCreatePirate} className="flex_container">
                <div className="left_container">
                    <p>
                        <label>Pirate Name: </label><br/>
                        <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                    </p>
                    <p>
                        <label>Image Url: </label><br/>
                        <input type="text" onChange={(e)=>setImgUrl(e.target.value)} value={imgUrl}/>
                    </p>
                    <p>
                        <label># of Treasure Chests: </label><br/>
                        <input type="number" onChange={(e)=>{
                            setNumChest(e.target.value)
                            if(e.target.value < 0)
                            setNumChest(0)
                            }} value={numChest}/>
                    </p>
                    <p>
                        <label>Pirate Catch Phrase: </label><br/>
                        <input type="text" onChange={(e)=>setCatchPhrase(e.target.value)} value={catchPhrase}/>
                    </p>
                </div>
                <div className="right_input_container">
                    <label htmlFor="position">Crew Position: </label> <br/>
                    <select 
                        value = {position} 
                        onChange={(e) => setPosition(e.target.value)} 
                        name = "position"
                        type = "category">
                        <option hidden defaultValue> -- select an option -- </option>
                        <option value="Captain">Captain</option>
                        <option value="First Mate">First Mate</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="Boatswain">Boatswain</option>
                        <option value="Powder Monkey">Powder Monkey</option>
                    </select>
                    <br/>
                    <br/>
                    <input type="checkbox" checked={pegleg} onChange={e => setPegleg(e.target.checked)} />
                    <label>Peg Leg </label><br />
                    <input type="checkbox" checked={eyePatch} onChange={e => setEyePatch(e.target.checked)} />
                    <label>Eye Patch</label><br />
                    <input type="checkbox" checked={hookHand} onChange={e => setHookHand(e.target.checked)} />
                    <label>Hook Hand</label><br />
                    <br /><br />
                    <input style={{marginLeft:"30px"}}type="submit"/>
                </div>
            </form>
                {dbErrors.map((err, index) => <p key={index} style={{color: "red"}}>{err}</p>)}

            </div>
            
        </div>


    )
}

export default Create;
