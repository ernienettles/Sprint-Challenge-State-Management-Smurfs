// @flow 
import React, { useEffect } from 'react';
import { fetchSmurfs, postSmurfs } from '../actions'
import { connect } from 'react-redux';
import Smurf from './Smurf';

export const SmurfList = props => {

    const { fetchSmurfs, smurfs } = props;

    useEffect(() => {
        fetchSmurfs()
        }, [fetchSmurfs, postSmurfs])
    

    return (
        <div>
        {smurfs.map(smurf => (
            <Smurf key={smurf.id} name={smurf.name} age={smurf.age} height={smurf.height} />
        ))}
            
        </div>
    );
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, { fetchSmurfs, postSmurfs })(SmurfList)