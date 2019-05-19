
import {combineReducers} from 'redux-immutable'
import {reducer as headerReducer} from './../common/header/store'
import homeReducer from './../pages/home/components/store/reducer'
import DetailReducer from './../pages/detail/store/reducer'
import LoginReducer from './../pages/login/store/reducer'
const reducer=combineReducers({
    header:headerReducer,
    home:homeReducer,
    detail:DetailReducer,
    login:LoginReducer
})
export default reducer;