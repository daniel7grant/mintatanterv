import {createStore, combineReducers, compose} from 'redux'
import dragstate from './reducers/dragstate'
import filter from './reducers/filter'
import subjects from './reducers/subjects'
import persistState from 'redux-localstorage'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(
	combineReducers({
		dragstate,
		filter,
		subjects,
	}),
	composeEnhancer(
		persistState(['subjects'])
	)
);
