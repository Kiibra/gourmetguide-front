const baseUrl = 'http://3.141.39.147'

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

export const recipeDelete = async (recipeId) => {
  try {
    const res = await fetch(`${baseUrl}/recipes/${recipeId}/delete/`, {
      method: 'DELETE',
    })

    if (res.ok) { // Checking if res status is ok
      // Handle empty responses (such as HTTP 204 No Content)
      if (res.status === 204) {
        return null; // No content, successful deletion
      }
      //  check the ContentType header of the res before trying to parse it as JSON - parse JSON only if the res has a JSON content type
      const contentType = res.headers.get('Content-Type');
      if (contentType && contentType.includes('application/json')) {
        return await res.json(); // Parse and return JSON data
      }
      // If it's not JSON, just return the text response
      const text = await res.text()
      return text
    } else {
      throw new Error(`Server error: ${res.status} ${res.statusText}`)
    }
  } catch (error) {
    console.error('Error deleting recipe:', error)
    throw error
  }
}

export default {
  getAllRecipes,
  addRecipe, 
  recipeDetail,
  updateRecipe,
  recipeDelete, 
}