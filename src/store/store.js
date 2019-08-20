import {createStore,combineReducers} from 'redux'


let listReducer=function(state=[],action){

       switch(action.type){
           case 'CUN':
           let newState=JSON.parse(JSON.stringify(state))
           newState.push(action.data)
           return [...newState]
           default:
           return [...state]
        }
}
let reducer=combineReducers({
    listReducer
})
let store=createStore(reducer)

export default store;