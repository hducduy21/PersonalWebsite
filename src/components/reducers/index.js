import lanReducer from './lan';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    Language: lanReducer,
});

export default rootReducer;
