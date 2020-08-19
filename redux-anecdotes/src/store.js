import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
//import { composeWithDevtools } from 'redux-devtools-extension'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'



const reducer = combineReducers({
    anecdotes: anecdoteReducer,
    notification: notificationReducer,
    filter: filterReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
  ));

/* const store = createStore(
    reducer,
    /* composeWithDevtools(applyMiddleware(thunk)
    ) */
    /* window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_ && window.__REDUX_DEVTOOLS_EXTENSION__(applyMiddleware(thunk)) */

export default store