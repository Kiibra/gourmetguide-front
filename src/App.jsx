// npm modules
import { Routes, Route } from 'react-router-dom'
// import { NavBar } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
// pages
import Landing from './pages/Landing/Landing'
import RecipesListPage from './pages/RecipesListPage/RecipesListPage'
import AddRecipePage from './pages/AddRecipePage/AddRecipePage'
import RecipeDetailPage from './pages/RecipeDetailPage/RecipeDetailPage'
import EditRecipePage from './pages/EditRecipePage/EditRecipePage'

// styles
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/Landing" element={<Landing />} />
        <Route path="/recipes" element={<RecipesListPage />} />
        <Route path="/recipes/addrecipe" element={<AddRecipePage />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetailPage />} />
        <Route path="/recipes/:recipeId/update" element={<EditRecipePage />} />
      </Routes>
    </>
  )
}

export default App
