import React, { useContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import {SiIfood} from "react-icons/si"
import {FaUtensilSpoon} from "react-icons/fa"
import {motion} from "framer-motion"
import { UserContext } from '../context/UserContext'
import { fetchData } from '../api'

export const Hero = () => {
  const {inputRef, callApi} = useContext(UserContext)

  const handleSubmit = async (e)=> {
    e.preventDefault()
    callApi() /* no need to provide args cause all the state are handled in userContext */
  }
  return (
    <>
      <form className="flex flex-col items-center gap-5 pt-5 text-center " >
          <h1 className="flex items-center text-2xl text-bold gap-x-2"><motion.span initial={{y: -20}} animate={{y: 0}} >Green Meal</motion.span> <span><SiIfood className="text-green-500" /></span> </h1>
          <input ref={inputRef} type='text' name='user-data' className="pl-3 text-green-700 rounded-full shadow-md h-9 w-52 md:w-80"/>
          {/* spoon button */}
          <button onClick={handleSubmit} className= "p-5 duration-300 bg-yellow-500 rounded-full shadow-md cursor-pointer shadow-inherit hover:bg-green-600 active:bg-red-500"><FaUtensilSpoon className='md:text-xl' /></button>
      </form>

      <Outlet />
    </>
  )
}
export default Hero;