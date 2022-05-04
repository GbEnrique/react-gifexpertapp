import React from 'react'
import { useFetchGif } from '../hooks/useFetchGif'
// import { getGifs } from '../helpers/GetGifs';
import GrifGridItem from './GrifGridItem';

const GifGrid = ({category}) => {


    // const [images,setImages]= useState([]);
    const {data,loading}= useFetchGif(category);

    // console.log(data);
    // console.log(loading);
   
    
    
    return (
      <>
        <h3 className='animate__animated animate__bounce'>{category}</h3>   
        {loading && <p className='animate__animated animate__flash'>Cargando...</p>}     
        <div className='card-grid'>
            {
              data.map((img)=>(
                <GrifGridItem 
                    key={img.id}
                    {...img}
                    />
              ))
            }
        </div>
      </>
  )
}

export default GifGrid
