import axios from 'axios';

const API = axios.create({baseURL:'http://localhost:5000'});


export const fetchData=()=> API.get('/home');
export const create=(data)=> API.post('/',data);
export const getDataForSearch =(dataSearch)=>API.get(`/home/search?search=${dataSearch.search||'none'}&brand=${dataSearch.brand}`);