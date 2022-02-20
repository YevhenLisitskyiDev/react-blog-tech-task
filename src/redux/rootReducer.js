 import { combineReducers } from "redux"
 import authReducer from "./auth/auth.reducer"
 

 const rootReducer = combineReducers({
	 auth: authReducer,
	//  posts: ''
 })

 export default rootReducer