const baseUrl = 'http://127.0.0.1:8000'

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

export default {
  getAllRecipes,
  addRecipe, 
}