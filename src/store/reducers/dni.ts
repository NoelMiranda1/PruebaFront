import * as types from '../types/dni'

const initialState ={
    data:[]
}

export default (state=initialState,action:any)=>{
    switch (action.type) {
        case types.DATADNI:
            return{
                ...state,
                data:action.payload
            }
    
        default:
            return state
    }
}