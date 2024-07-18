// npm modules
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

//service
import RecipeService from '../../services/RecipeService'

//css
import styles from './AddRecipe.module.css'

const AddRecipePage = () => {
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
      [name]: value
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
      await RecipeService.addRecipe(formData)
      navigate('/recipes')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className={styles.container}>
      <h2>Add New Recipe</h2>
      <hr />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="title-input">Title</label>
          <input
            type="text"
            name="title"
            id="title-input"
            value={formData.title}
            onChange={handleChange}
          />
          <label htmlFor="ingredients-input">Ingredients</label>
          <input
            type="text"
            name="ingredients"
            id="ingredients-input"
            value={formData.ingredients}
            onChange={handleChange}
          />
          <label htmlFor="instructions-input">Instructions</label>
          <textarea
            name="instructions"
            id="instructions-input"
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

export default AddRecipePage

