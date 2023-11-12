
import { Link, useLocation } from 'react-router-dom'
import { fetchSingleRecipe } from '../api'
import { useQuery } from 'react-query'

const ProductDetails = () => {
    /* extract the state obj from  the useLocation in order to call the api by providing the product id contained in the state obj */
    const {state, pathname} = useLocation()

    /* i need to delete the / from the pathname in order to use this parameter to call the api once again  */
    let pathArray = pathname.split("") /* put each character of the pathname in an array index */
    /* delete the first character from the 0 index which is a slash( / ) */
    pathArray.shift()
    /*  */
    let newPathArray = pathArray.join("")
    
    // creating an async function to wait for the async api call before returning the  value to use afterward with the useQuery of reac-query
    const getData = async ()=> {
        const api = await fetchSingleRecipe(state?.id || newPathArray )
        return api
    }

    const {data, isLoading, isFetching,isError} = useQuery("meal-info", getData)

    if(isLoading || isFetching) {
        return <div className='flex items-center justify-center h-screen'>
          <h1 className='text-4xl font-bold text-center'>Loading....</h1>
          </div>
      }
    console.log(data)

  return (
    <div className='bg-[brown] h-full'>
        {data && data.map(item => (

            /* BACK BUTTON */
            <div key={item.id} className='flex flex-col w-11/12 gap-10 mx-auto '>
                <div className='flex flex-col items-start mt-5 md:gap-10'>
                    <Link relative to=".." className='text-white'><button>Back</button></Link>
                    <h1 className='text-3xl font-bold '>{item.title.toUpperCase()}</h1>
                </div>
                {/* ADDITIONAL INFO BAR */}
                <div className='flex gap-4'>
                    {item.glutenFree && <span className='p-2 text-white bg-green-600 rounded-3xl'>Gluten Free</span>}
                    {item.vegan && <span className='p-2 text-white bg-green-600 rounded-3xl'>Vegan</span>}
                    {item.vegetarian && <span className='p-2 text-white bg-green-600 rounded-3xl'>Vegetarian</span>}
                </div>
                {/* IMAGE & DESCRIPTION */}
                <div className='flex flex-col items-center gap-10 m-auto lg:flex-row'>
                    <img className='rounded' src={item.image} />
                    <div>
                        <p className="p-2 rounded bg-slate-400">{item.summary}</p>
                    </div>
                </div>
                {/* INSTRUCTIONS */}
                <div className='w-11/12 p-5 m-auto rounded bg-slate-300'>
                    <h3 className='text-2xl font-bold text-center text-white'>Instructions</h3>
                    <p>{item.instructions}</p>
                </div>
            </div>
        ))}
        {isLoading && <h2 className='text-lg text-center'>Loading....</h2>}
        {isError && <h2>An error occoured with the data</h2>}
    </div>
  )
}

export default ProductDetails