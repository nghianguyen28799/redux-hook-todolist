import { createStore, combineReducers } from 'redux';
import TodoReducer from './reducers/TodoReducer'

const rootReducer = combineReducers({
    todo: TodoReducer
})

const configureStore = () => createStore(rootReducer)
export default configureStore