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

export default {
  getAllRecipes,
}