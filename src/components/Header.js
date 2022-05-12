//icons
import callIcon from '../assets/Call.svg'
import locationIcon from '../assets/location.svg'
import mailIcon from '../assets/Mail.svg'
import callIcon from '../assets/Call.svg'
import callIcon from '../assets/Call.svg'

export default function Header() {
  return (
    <div className='header'>
        <div className="container">
            <ul className='address'>
                <li>
                  <img src={locationIcon} alt="location" />
                  <span>Hyderabad, India</span>
                </li>
                <li>
                  <img src={callIcon} alt="call" />
                  <span>+91 9969922348</span>
                </li>
                <li>
                <span>Import.Export@mail.com</span>
                </li>
            </ul>
        </div>
    </div>
  )
}
