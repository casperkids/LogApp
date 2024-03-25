import { Link, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import StyledNavbar from '../components/StyledNavbar'

const Home = () => {
  return (
    <>
      <div>
       <h1 className='title'>Robo Log</h1>
       <h4 className='title'>- Daily Musings with Robot -</h4>
       <hr className="border-top border-secondary"style={{ marginTop: '30px' }} /> 
      </div>
      <StyledNavbar />
        <Outlet />
        
    </>
  )
}
export default Home