import {createStore,compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import redcers from './reducers'

const store = createStore(redcers,{},compose(applyMiddleware(thunk)))

export default store
