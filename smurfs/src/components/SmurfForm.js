import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postSmurfs } from '../actions'

const SmurfForm = props => {

    const [smurf, setSmurf] = useState({
        name: "",
        age: "",
        height: ""
    })

    const handleChanges = e => {
        setSmurf({
            ...smurf,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                props.postSmurfs(smurf)
            }
            }>
                <label>Name</label>
                <input
                    name="name"
                    type="text"
                    placeholder="Smurf name"
                    onChange={handleChanges}
                    value={smurf.name}
                />
                <label>Age</label>
                <input
                    name="age"
                    type="text"
                    placeholder="Smurf age"
                    onChange={handleChanges}
                    value={smurf.age}
                />
                <label>Height</label>
                <input
                    name="height"
                    type="text"
                    placeholder="Smurf height"
                    onChange={handleChanges}
                    value={smurf.height}
                />
                <button>Post your new smurf</button>
            </form>
        </div>
    )
}

export default connect(null, { postSmurfs })(SmurfForm);