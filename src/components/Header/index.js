import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
  return (
    <nav>
      <ul className="header-unorder-container">
        <Link to="/" className="list-home">
          <li>Home</li>
        </Link>
        <Link to="/about" className="list-about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  )
}
export default Header
