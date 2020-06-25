import * as regionsActionTypes from "./regionsActionTypes";

const regionsReducer = (state = {}, action) => {
    switch(action.type){
        case regionsActionTypes.SET_FILTER: {
            return {
                ...state,
                filter: action.data
            };
        }

        case regionsActionTypes.SET_SORTING: {
            return {
                ...state,
                sorting: action.data
            };
        }

        default:
            return state;
    }
}

export default regionsReducer;