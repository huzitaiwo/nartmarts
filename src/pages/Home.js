import Banner from '../components/Banner'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className='home'>
      <Header />
      <Navbar />
      <Banner />
    </div>
  )
}
