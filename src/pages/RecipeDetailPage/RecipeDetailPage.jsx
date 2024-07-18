import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { NavLink} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import RecipeService from '../../services/RecipeService'


const RecipeDetailPage = () => {
  const { recipeId } = useParams()
  const [recipe, setRecipe] = useState(null)
  
  useEffect(() => {
    const fetchRecipeDetail = async () => {
      const data = await RecipeService.recipeDetail(recipeId)
      setRecipe(data.recipe)
    }
    
    fetchRecipeDetail()
  }, [recipeId])
  
  const navigate = useNavigate()

  const handleDelete = async () => {
    RecipeService.recipe.recipeDelete(recipeId)
    navigate('/recipes')
  }

  if (!recipe) return <h4>Recipe not found!</h4>

  return (
    <div className="RecipePage">
      <h1>Recipe Details</h1>
      <hr />
      <div>
        <h3>{recipe.title}</h3>
        <p>{recipe.ingredients}</p>
        <p>{recipe.instructions}</p>
      </div>
      <NavLink to='/recipes'><button id="back-btn">Back</button></NavLink>
      <NavLink to={`/recipes/${recipeId}/update`}><button id="update-btn">Edit</button></NavLink>
      <button id="del-btn" onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default RecipeDetailPage
