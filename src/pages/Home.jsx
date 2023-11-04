import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';
import Meal from '../components/Meal';




const Home = () => {
  
  const {apiData, callApi} = useContext(UserContext)

  useEffect(()=> {
    callApi()
  }, [])
  
  return (
    <div className='h-full bg-[brown] mb-10'>

        <ul className='grid w-11/12 grid-cols-1 gap-8 pb-20 m-auto mt-16 md:gap-6 md:grid-cols-3 lg:grid-cols-4'>
          {apiData && apiData.map( elem => {
            return <Meal key={elem.id} {...elem} />
          })}
          {!apiData && <h2 className='text-3xl font-bold '>No food found</h2>}
        </ul>
    </div>
  )
}

export default Home