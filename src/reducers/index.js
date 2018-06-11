import { combineReducers } from "redux";
import chatReducer from './chat_reducers';
import inputReducer from './input_reducer';


const rootReducer = combineReducers({
    chat: chatReducer,
    input: inputReducer
});

export default rootReducer;

