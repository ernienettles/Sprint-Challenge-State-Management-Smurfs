// @flow 
import React from 'react';

const Smurf = props => {
    return (
        <div>
           <h1>{props.name}</h1>
           <p>{props.name}</p>
           <p>{props.height}</p> 
        </div>
    );
};

export default Smurf;