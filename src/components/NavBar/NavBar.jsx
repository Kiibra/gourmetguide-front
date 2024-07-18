// npm modules
import { NavLink } from 'react-router-dom'

// css
import styles from "./NavBar.module.css"

const NavBar = () => {
  return (
    <nav>
      <div className={styles.container}>
        <h2>Gourmet Guide</h2>
        <h2><NavLink to="/" className={styles.active}>Landing</NavLink></h2>
        <h2><NavLink to="/recipes" className={styles.active}>All Recipes</NavLink></h2>
        <h2><NavLink to="/recipes/addrecipe" className={styles.active}>Add Recipe</NavLink></h2>
      </div>
    </nav>
  )
}

export default NavBar
