import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { fetchSingleRecipe } from '../api'

const ProductDetails = () => {
    /* extract the state onj from  the useLocation in order to call the api by providing the product id contained in the state obj */
    const {state} = useLocation()

    const [recipeData, setRecipeData] = useState(null)

    // creating an async function to wait for the async api call before storing the returned value in the recipeData state
    const getData = async ()=> {
        const data = await fetchSingleRecipe(state.id)
        setRecipeData(data)
    }

    useEffect(()=> {
        getData()
    }, [])
  return (
    <div className='bg-[brown] h-screen'>
        {recipeData ? recipeData.map(item => (
            <div key={item.id} className='flex w-11/12 m-auto'>
                <div>
                    <h1 className='text-xl font-bold'>{item.title}</h1>
                    <p>{item.summary}</p>
                </div>
                <img src={item.image} />
            </div>
        )) : <h1>No Food for you today</h1>}
    </div>
  )
}

export default ProductDetails