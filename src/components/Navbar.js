import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className="logo">
        Import Export
      </div>
      <ul className="nav-links">
        <li><Link>Home</Link></li>
        <li><Link>About</Link></li>
        <li><Link>Contact us</Link></li>
        <li><Link>Shop</Link></li>
      </ul>
    </nav>
  )
}
