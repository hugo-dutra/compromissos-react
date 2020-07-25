import { createStore, combineReducers } from 'redux'
import contatosReducer from './reducers/contatosReducer'

const reducers = combineReducers({
  contatosReducers: contatosReducer
})

const storeConfig = () => {
  return createStore(reducers)
}

export default storeConfig;