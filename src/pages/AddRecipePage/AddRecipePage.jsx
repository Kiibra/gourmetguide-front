// npm modules
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

//service
import RecipeService from '../../services/RecipeService'

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
    <div>
      <h2>Add New Recipe</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Ingredients</label>
          <input
            type="text"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Instructions</label>
          <textarea
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
          />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddRecipePage

