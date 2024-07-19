// npm modules
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

//service
import RecipeService from '../../services/RecipeService'

//css
import styles from './EditRecipe.module.css'

const EditRecipePage = () => {
  const { recipeId } = useParams()
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    instructions: '',
  })

  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    const { title, ingredients, instructions } = formData

    if (!title || !ingredients || !instructions) {
      setError('All fields are required')
      return
    }

    try {
      await RecipeService.updateRecipe(recipeId, formData)
      navigate(`/recipes/${recipeId}`)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className={styles.container}>
      <h2>Edit Recipe</h2>
      <hr />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <label>Ingredients</label>
          <input
            type="text"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
          />
          <label>Instructions</label>
          <textarea
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
          />
        </div>
        {error && <div className={styles.error}>{error}</div>}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default EditRecipePage
