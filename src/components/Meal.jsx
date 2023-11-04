import React from 'react'
import { Link } from 'react-router-dom'

const Meal = ({image, title, readyInMinutes, id,}) => {

  return (
    <div key={id} className='flex flex-col justify-between bg-white rounded-md'>
        <img src={image} className='w-full rounded' />
        <div className='flex flex-col items-center gap-2 m-2'>
        <h3 className='overflow-hidden text-xl font-bold line-clamp-2'>{title}</h3>
        {/*  TITLE & DESCRIPTION  */}
        <div className='flex items-center gap-6'>
            {/* Ready time */}
            <span>vegetarian</span>
            <span className='p-2 text-xs text-white bg-green-700 rounded-full'>{readyInMinutes}min</span>
        </div>
        <Link 
            className='w-full p-2 tracking-wider text-white bg-green-700 rounded'
            to={`${id}/details`}
            state={{id: id}}
        >
        <button>VIEW</button>
        </Link>
        </div>
    </div>

  )
}

export default Meal