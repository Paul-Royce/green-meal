import Meal from '../components/Meal';
import { ApiContext } from '../context/ApiContext';
import { useContext } from 'react';



const Home = () => {

  const {data, isLoading, isError, isFetching} = useContext(ApiContext)
  
  
  return (
    <div className=' bg-[brown]'>

        <ul className='grid w-11/12 grid-cols-1 gap-8 pb-20 m-auto mt-16 md:gap-6 md:grid-cols-3 lg:grid-cols-4'>
          {data && data.map(elem => (
            <Meal key={elem.id} {...elem} />
          ))}
          
        </ul>
          {isLoading || isFetching && <h2 className='h-screen text-3xl font-bold'>Loading...</h2>}
          {isError && <h2>Something went wrong with the data</h2>}
    </div>
  )
}

export default Home