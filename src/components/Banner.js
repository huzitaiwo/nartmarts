import banner from '../assets/hero_image.png'

export default function Banner() {
  return (
    <div className='banner'>
      <img src={banner} alt="banner" />
      <div className="container">
        <h3>Making Transport</h3>
        <h1>FAST & SAFE</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean nascetur ridiculus mus dolor sit amet, consectetu.</p>
      </div>
    </div>
  )
}
