import React from 'react'
import {Link} from "react-router-dom";
import DeleteButton from './DeleteButton';
import './List.css'
const PirateList = (props) => {
    const { removeFromDom,pirates } = props;
    return (
        <div className="container">
            {pirates.map( (pirate, i) =>
                    <div key={pirate._id} className="flex-container">
                        <img src={pirate.imgUrl} alt="pirate icon" width="100" height="100"/>
                        <div>
                            <h2>{pirate.name}</h2>
                                <Link style={{marginRight:"10px"}} to={"/pirate/"+pirate._id}>
                                    <button>View Pirate</button>
                                </Link>
                                <DeleteButton 
                                    pirateId={pirate._id} 
                                    successCallback={()=>removeFromDom(pirate._id)}
                                />
                        </div>
                        
                    </div>
                )}
        </div>

    )
}
    
export default PirateList;