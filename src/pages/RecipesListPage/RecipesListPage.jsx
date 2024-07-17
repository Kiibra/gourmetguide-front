import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import recipeService from "../../services/RecipeService"

const RecipesListPage = () => {
  const [recipes, setRecipes] = useState([])
  
  useEffect ( () => {
    const fetchData = async () => {
      const recipesData = await recipeService.getAllRecipes()
      setRecipes(recipesData.recipes)
    }

    fetchData()
  }, [])


  if (!recipes.length) return <h1>Loading all recipies...</h1>

  return ( 
    <>
    <h1>All Recipes</h1>
    <hr />
    {recipes.map((recipe) => (
      <div key={recipe.id} >
          <Link to={`/recipes/${recipe.id}`}>
            <h2>{recipe.title}</h2>
          </Link>
      </div>
    ))}
    </>
  )
}


export default RecipesListPage