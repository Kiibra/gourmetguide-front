import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
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
      <h1 id="header" >Recipes List</h1>
      <div className='RecipeList' >
        {recipes.map((recipe) => (
          <NavLink key={recipe.id} to={`/recipes/${recipe.id}`}>
            <div className='RecipeCard'>
              <h3>{recipe.title}</h3>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  )
}


export default RecipesListPage