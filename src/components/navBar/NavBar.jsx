import React,{useState} from 'react'
import {useDispatch} from 'react-redux';
import {useNavigate,Link} from 'react-router-dom';
import {getDataBySearch} from '../../action/Data';

const NavBar = () => {
  const [search,setSearch] =useState('');
  const [brand,setBrand] =useState('');
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const changeHandler=(e)=>{
    setSearch(e.target.value);
  }
  const keyPress=(key)=>{
    if(key.keyCode===13)
    {
      searchHandler();
    }
  }
  const searchHandler=(e)=>{
    e.preventDefault();
    if(search || brand){
      dispatch(getDataBySearch({search,brand}));
      navigate(`/home/search?search=${search}&brand=${brand}`);
      setSearch('');
      setBrand('');
    }
    else{
      navigate(`/`);
    }
  }
  return (
    <div className='container-lg bg-black text-muted fw-bold fs-1 fs-md-4 rounded-4 position-fixed w-100'>
      <div className='d-flex justify-content-between align-items-center py-2 ms-2'>
        <div>
          <Link to='/' className='text-muted text-decoration-none me-1'>ReactProduct</Link>
        </div>
        <div className='d-flex justify-content-between align-items-center gap-3 me-3'>
          <input type='text' name='searchName' value={search} placeholder='Search' className='form-control' onChange={changeHandler} onKeyPress={keyPress}/>
          <input type='text' name='searchBrand' value={brand} placeholder='Search By Brand' className='form-control' onChange={(e)=>setBrand(e.target.value)} onKeyPress={keyPress}/>
          <button className='btn btn-sm btn-danger p-2 text-white' onClick={searchHandler}>Search</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar