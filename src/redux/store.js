import { combineReducers, createStore, applyMiddleware } from "redux";
import BallReducer from "./Reducers/BallReducer";
import BatReducer from "./Reducers/BatReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import UserReducer from "./Reducers/UserReducer";
import thunk from "redux-thunk";


const rootReducer=combineReducers({
    Bat:BatReducer,
    Ball:BallReducer,
    User:UserReducer,
})

const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;