import React from 'react'
import axios from 'axios';
    
const DeleteButton =(props)=>{
    
    const { pirateId, successCallback } = props;
    
    const deletePirate = e => {
        if (window.confirm("Are you sureeee to walk the plank?")){
            axios.delete('http://localhost:8000/api/pirates/' + pirateId)
                .then(res=>{
                    successCallback();
                })
        }
    }
    
    return (
        <button onClick={deletePirate}>
            Walk the Plank
        </button>
    )
}
export default DeleteButton
