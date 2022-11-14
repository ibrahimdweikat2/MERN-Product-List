import React,{useEffect} from 'react'
import {getData} from '../../action/Data';
import {useDispatch,useSelector} from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  const data=useSelector(state=> state.Data)
  useEffect(()=>{
    dispatch(getData());
  },[dispatch])
  return (
    <div className='row'>
      {
        data.map(item=>(
          <div key={item._id} className='col-xs-12 col-md-4'>
            <div className='text-sm-center'>
              <img className='rounded-4 my-2' src={item.image_url} alt={item.name}/>
            </div>
            <div>
              <h3 className='w-75 text-center'>{item.name}</h3>
              <p>{item.description}</p>
            </div>
            <div >
              <p className='text-muted'>{`Brand: ${item.brand}`}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Home