import { combineReducers } from "redux";
import appReducer from "./appReducer";
import regionsReducer from "../pages/regions/regionsReducer";

const appCombineReducer = combineReducers({
    app: appReducer,
    regions: regionsReducer,
})

export default appCombineReducer;