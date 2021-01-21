
import {FETCHING_RMC_START, FETCHING_RMC_SUCCESS,FETCHING_RMC_FAIL} from '../actions/rmcActions';

export const initialState = {
    rmChars:[],
    isFetching:false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case(FETCHING_RMC_START):
            return({
                ...state,
                isFetching: true,
                error:''
            })
        case(FETCHING_RMC_SUCCESS):
            return({
                ...state,
                isFetching: false,
                rmChars: [...action.payload],   
            })
        case(FETCHING_RMC_FAIL):
            return({
                ...state,
                error: action.payload
            })
        default:
            return(state)
    }
}
