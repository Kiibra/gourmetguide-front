const baseUrl = 'http://3.141.39.147:8000'

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
    throw new Error(`Error fetching recipe details:`, error)
  }
}

const updateRecipe = async (recipeId, recipe) => {
  try {
    const res = await fetch(`${baseUrl}/recipes/${recipeId}/update/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recipe),
    })

    if (!res.ok) {
      throw new Error('Error updating recipe')
    }
    const data = await res.json()
    return data

  } catch (error) {
    throw new Error('Error updating recipe:', error)
  }
}

const recipeDelete = async (recipeId) => {
  try {
    const res = await fetch(`${baseUrl}/recipes/${recipeId}/delete/`, {
      method: 'DELETE',
    })
    return await res.json()

  } catch (error) {
    throw new Error('Error deleting recipe')
  }
}

export default {
  getAllRecipes,
  addRecipe, 
  recipeDetail,
  updateRecipe,
  recipeDelete, 
}