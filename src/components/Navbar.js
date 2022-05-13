import { Link } from "react-router-dom"
import logo from '../assets/logo.svg'

export default function Navbar() {
  return (
    <nav className='navbar'>
        <div className="container">
            <div className="logo">
                Import <img src={logo} alt="" /> Export
            </div>
            <ul className="nav-links">
                <li><Link>Home</Link></li>
                <li><Link>About</Link></li>
                <li><Link>Contact us</Link></li>
                <li><Link>Shop</Link></li>
            </ul>
        </div>
    </nav>
  )
}
