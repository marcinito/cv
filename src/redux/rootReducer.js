import {combineReducers} from 'redux'
import heightReducer from './reducer/heightReducer'



const rootReducer=combineReducers({
    height:heightReducer
})

export default rootReducer