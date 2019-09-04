import React from 'react';

const backDrop = props => {
    return (
        <div className="close-menu">
            <span className="x" onClick={props.click}>X</span>
            <div className="backdrop" onClick={props.click} />
        </div>
        
    )
    
    };

export default backDrop;