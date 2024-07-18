import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import RecipeService from "../../services/RecipeService"

//css
import styles from "./Recipes.module.css"

const RecipesListPage = () => {
  const [recipes, setRecipes] = useState([])
  
  useEffect ( () => {
    const fetchData = async () => {
      const recipesData = await RecipeService.getAllRecipes()
      setRecipes(recipesData.recipes)
    }

    fetchData()
  }, [])


  if (!recipes.length) return <h1>Loading all recipies...</h1>

  return ( 
    <>
      <h1 id="header" >Recipes List</h1>
      <div className={styles.container} >
        {recipes.map((recipe) => (
          <NavLink key={recipe.id} to={`/recipes/${recipe.id}`}>
            <div className={styles.RecipeCard}>
              <h3>{recipe.title}</h3>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  )
}


export default RecipesListPage