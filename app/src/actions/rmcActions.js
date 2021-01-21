import axios from 'axios';

export const FETCHING_RMC_START = 'FETCHING_RMC_START';
export const FETCHING_RMC_SUCCESS = 'FETCHING_RMC_SUCCESS';
export const FETCHING_RMC_FAIL = 'FETCHING_RMC_FAIL';

export const getRmChar = () => {
    return (dispatch => {
        dispatch({type:FETCHING_RMC_START});
        axios
        .get('https://rickandmortyapi.com/api/character')
        .then((res)=>{
            console.log(res.data.results)
            dispatch({type:FETCHING_RMC_SUCCESS, payload: res.data.results})
        })
        .catch((err)=>{
            dispatch({type:FETCHING_RMC_FAIL, payload: err.response.status})
        })
    })
}  