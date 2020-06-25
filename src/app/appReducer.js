import * as appActionTypes from "./appActionTypes";

const appReducer = (state = {}, action) => {
    switch(action.type){
        case appActionTypes.SET_LIBRARIES: {
            return {
                ...state,
                libraries: action.data
            };
        }

        case appActionTypes.SET_ERROR: {
            return {
                ...state,
                error: action.data
            };
        }

        case appActionTypes.RESET_ERROR: {
            const newState = {...state};
            delete newState.error;
            return newState;
        }

        case appActionTypes.SET_LOADING: {
            return {
                ...state,
                isLoading: true
            };
        }

        case appActionTypes.RESET_LOADING: {
            const newState = {...state};
            delete newState.isLoading;
            return newState;
        }

        default:
            return state;
    }
}

export default appReducer;