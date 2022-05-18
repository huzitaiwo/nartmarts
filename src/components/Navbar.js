import { Link } from "react-router-dom"
import logo from '../assets/logo.svg'

export default function Navbar() {
  return (
    <nav className='navbar'>
        <div className="container">
            <div className="logo">
                Import <img src={logo} alt="logo" /> Export
            </div>
            <ul className="nav-links">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact us</Link></li>
                <li><Link to='/shop'>Shop</Link></li>
            </ul>
        </div>
    </nav>
  )
}
