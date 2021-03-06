import React from 'react'

const GrifGridItem = ({id,title,url}) => {
    // console.log({id,title,url})
  return (
    <div className='card animate__animated animate__fadeInUp'>
      <img src={url} alt={title}/>
      <p>{title}</p>
    </div>
  )
}

export default GrifGridItem
