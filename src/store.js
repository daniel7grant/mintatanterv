import {createStore, combineReducers} from 'redux'
import subjects from './reducers/subjects'
import filter from './reducers/filter'

export default createStore(
	combineReducers({
		subjects,
		filter
	}),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
