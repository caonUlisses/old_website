import React from 'react'
import './Frame.css'

function Frame ({...props}) {
  return (
    <div className='frame'>
      <div className='frame__master'>
        <div className='frame__container'>
          <img className='frame__picture' src={props.user.avatar_url} alt='myself' />
        </div>
        <div className='frame__status'>
          <div className='online' />
          <span className='frame__tag'>Currently Hirable</span>
        </div>
      </div>
    </div>
  )
}

export default Frame
