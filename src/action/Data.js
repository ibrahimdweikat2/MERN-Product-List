import * as api from '../api/index';

export const getData=()=>async dispatch=>{
    try {
        const {data} =await api.fetchData();
        dispatch({type:'FETCH_ALL',payload:data.data});
    } catch (error) {
        console.log(error);
    }
}

export const getDataBySearch= dataSearch => async dispatch=>{
    try {
        const {data}= await api.getDataForSearch(dataSearch);
        dispatch({type:'SEARCH',payload:data.data});
    } catch (error) {
        console.log(error);
    }
}

export const create= (data)=> async (dispatch)=>{
    try {
        const{newData}=await api.create(data);
        console.log(newData);
    } catch (error) {
        console.log(error);
    }
}