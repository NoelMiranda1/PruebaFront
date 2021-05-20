import * as types from '../types/dni'

export const setData =(value:any)=>({
  type:types.DATADNI,
  payload: value  
})