// npm modules
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
  <nav>
    <div>
      <NavLink />
      <h2>Gourmet Guide</h2>
      <h2><NavLink to="/Landing">Landing</NavLink></h2>
      <h2><NavLink to="/recipes">All Recipes</NavLink></h2>
    </div>
</nav>
  )
}

export default NavBar
