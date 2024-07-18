import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { NavLink} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import RecipeService from '../../services/RecipeService'

//css
import styles from './RecipeDetail.module.css'

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
    setRecipe(recipe)
  }

  if (!recipe) return <h4>Recipe not found!</h4>

  return (
    <div className={styles.container}>
      <h1>Recipe Details</h1>
      <hr />
      <div>
        <h3>{recipe.title}</h3>
        <p><span className={styles.label}>Ingredients:</span> {recipe.ingredients}</p>
        <p><span className={styles.label}>Instructions:</span> {recipe.instructions}</p>
      </div>
      <NavLink to='/recipes'><button id={styles.backBtn}>Back</button></NavLink>
      <NavLink to={`/recipes/${recipeId}/update`}><button id={styles.updateBtn}>Edit</button></NavLink>
      <button id={styles.delBtn} onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default RecipeDetailPage
