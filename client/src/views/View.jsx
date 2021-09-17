import {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {Link } from 'react-router-dom';

const View = (props) => {

    const {id} = useParams();
    const [pirate, setPirate] = useState({});

    useEffect( ()=> {
        axios.get("http://localhost:8000/api/pirates/" + id)
            .then( res => {
                setPirate(res.data)
            })
            .catch(err=> console.log(err))
    }, [id,pirate])

    const updatePirate = (option,condition) => {
        switch(option){
            case "pegleg":
                axios.put('http://localhost:8000/api/pirates/' + id, {"pegleg":condition})
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => {
                        console.log(err.response)
                    });
                break;
            case "eyePatch":
                axios.put('http://localhost:8000/api/pirates/' + id, {"eyePatch":condition})
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => {
                        console.log(err.response)
                    });
                break;
            case "hookHand":
                axios.put('http://localhost:8000/api/pirates/' + id, {"hookHand":condition})
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => {
                        console.log(err.response)
                    });
                break;
            default:break;
        }

        
        
    }
    return (
        <div>
            <h1 className="headerArea">{pirate.name} 
            <Link to={"/pirates"}>
                    <button>Crew Board</button>
                </Link>
                </h1>
            <div className="bodyArea flex_container">
                <div className="left_container">
                    <img src={pirate.imgUrl} alt="pirate icon" width="200" height="200"/>
                    <h1>"{pirate.catchPhrase}"</h1>
                </div>
                <div className="right_container">
                    <h1>About</h1>
                    <div className="right_body">
                        <p>Position: {pirate.position}</p>
                        <p>Treasures: {pirate.numChest}</p>
                        {pirate.pegleg? 
                            <p>Peg Leg: Yes
                                <button className ="redbutton" onClick={()=>updatePirate("pegleg",false)}>No</button>
                            </p>
                            :
                            <p>Peg Leg: No
                                <button className ="greenbutton" onClick={()=>updatePirate("pegleg",true)}>Yes</button>
                            </p>
                        }
                        {pirate.eyePatch? 
                            <p>Eye Patch: Yes
                                <button className ="redbutton" onClick={()=>updatePirate("eyePatch",false)}>No</button>
                            </p>
                            :
                            <p>Eye Patch: No
                                <button className ="greenbutton" onClick={()=>updatePirate("eyePatch",true)}>Yes</button>
                            </p>
                        }
                        {pirate.hookHand? 
                            <p>Hook Hand: Yes
                                <button className ="redbutton" onClick={()=>updatePirate("hookHand",false)}>No</button>
                            </p>
                            :
                            <p>Hook Hand: No
                                <button className ="greenbutton" onClick={()=>updatePirate("hookHand",true)}>Yes</button>
                            </p>
                        }

                    </div>
                </div>
            </div>
            {/* {JSON.stringify(pirate)} */}
        </div>
    )
}

export default View