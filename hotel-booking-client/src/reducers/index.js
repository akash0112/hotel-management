import { combineReducers } from "redux"
import { authreducer } from "./auth"
const rootreducer=combineReducers({
    auth:authreducer
  }) 
export default rootreducer