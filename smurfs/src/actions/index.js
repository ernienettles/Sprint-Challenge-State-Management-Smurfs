import smurfs from '../apis/smurfs';

export const fetchSmurfs = () => async dispatch => {
    const response = await smurfs.get('/smurfs');

    console.log(response)

    dispatch({ type: 'FETCH_SMURF', payload: response });
}

export const postSmurfs = (post) => async dispatch => {
    const response = await smurfs.post('/smurfs', post);

    console.log(response)

    dispatch({ type: 'POST_SMURF', payload: response })
}