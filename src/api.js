import axios from 'axios';

export const fetchData = async (inputValue)=> {

  const options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
    params: {
      query: inputValue || "pizza",
      diet: "vegetarian",
      type: 'main course',
      instructionsRequired: 'true',
      fillIngredients: 'false',
      addRecipeInformation: 'true',
      maxReadyTime: '20',
      sortDirection: 'asc',
      offset: '0',
      number: '8',
      limitLicense: 'false',
      ranking: '2'
    },
    headers: {
      'X-RapidAPI-Key': '4fbab35f17msh36a74420fba7681p19aadfjsn5c559a7c5248',
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options)
    return response.data.results
  } catch (error) {
    console.error(error)
    return error.message
  }
}

export const fetchSingleRecipe = async (foodId)=> {
  const options = {
    method: 'GET',
    url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${foodId}/information`,
    headers: {
      'X-RapidAPI-Key': '4fbab35f17msh36a74420fba7681p19aadfjsn5c559a7c5248',
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
  };
  try {
    const response = await axios.request(options)
    if (response.status === 200) {
      const data = response.data
      return [data]
    } 
  } catch(err) {
    console.log(err.message)
  }
}