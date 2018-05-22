import { combineReducers } from "redux";
import chatReducer from './chat_reducers';


const rootReducer = combineReducers({
    chat: chatReducer
});

export default rootReducer;

