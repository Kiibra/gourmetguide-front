const baseUrl = 'http://localhost:8000'

const getAllRecipes = async () => {
  try {
    const res = await fetch(`${baseUrl}/recipes/`)
    if(!res.ok){
      throw new Error ('Err getting all recipes')
    }
    const data = await res.json()
    return data
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`)
  }
}

const addRecipe = async (recipe) => {
  try {
    const res = await fetch(`${baseUrl}/recipes/addrecipe/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recipe),
    })

    if (!res.ok) {
      const errorData = await res.json()
      throw new Error(`Error adding recipe: ${errorData.message || res.statusText}`)
    }

    const data = await res.json()
    return data
  } catch (error) {
    throw new Error(`Error adding recipe: ${error.message}`)
  }
}

const recipeDetail = async (recipeId) => {
  try {
    const res = await fetch(`${baseUrl}/recipes/${recipeId}/`)
    if (!res.ok) {
      throw new Error('Error fetching recipe details')
    }
    const data = await res.json()
    return data
  } catch (error) {
    throw new Error(`Error fetching recipe details: ${error.message}`)
  }
}

export default {
  getAllRecipes,
  addRecipe, 
  recipeDetail,
}