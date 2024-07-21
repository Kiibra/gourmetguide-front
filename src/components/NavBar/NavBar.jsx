// npm modules
import { NavLink } from 'react-router-dom'
import logo from '../../../public/assets/images/GG.png'

// css
import styles from "./NavBar.module.css"

const NavBar = () => {
  return (
    <nav>
      <div className={styles.container}>
        <img src={logo} alt="logo" ></img>
        <NavLink to="/" className={styles.active}>Landing</NavLink>
        <NavLink to="/recipes" className={styles.active}>All Recipes</NavLink>
        <NavLink to="/recipes/addrecipe" className={styles.active}>Add Recipe</NavLink>
      </div>
    </nav>
  )
}

export default NavBar
