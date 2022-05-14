//icons
import callIcon from '../assets/Call.svg'
import locationIcon from '../assets/location.svg'
import mailIcon from '../assets/Mail.svg'
import whatsappIcon from '../assets/whatsapp.svg'
import facebookIcon from '../assets/facebook.svg'
import instagramIcon from '../assets/instagram.svg'
import twitterIcon from '../assets/twitter.svg'
import linkedinIcon from '../assets/linkedin.svg'

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
                  <img src={mailIcon} alt="mail" />
                  <span>Import.Export@mail.com</span>
                </li>
            </ul>
            <ul className="social-links">
                <li>
                    <img src={facebookIcon} alt="" />
                </li>
                <li>
                    <img src={instagramIcon} alt="" />
                </li>
                <li>
                    <img src={twitterIcon} alt="" />
                </li>
                <li>
                    <img src={linkedinIcon} alt="" />
                </li>
                <li>
                    <img src={whatsappIcon} alt="" />
                </li>
            </ul>
        </div>
    </div>
  )
}
