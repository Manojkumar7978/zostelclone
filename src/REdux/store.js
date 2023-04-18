import { legacy_createStore as createstore, applyMiddleware } from 'redux';
import myReducer from './reducer/reducer';
import thunk from 'redux-thunk'

let store = createstore(myReducer, applyMiddleware(thunk));
export default store;