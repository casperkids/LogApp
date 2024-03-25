import { NavLink } from 'react-router-dom';

const StyledNavbar = () => {
  return (
    <nav className='navbar'>
        <NavLink to='/'style={({ isActive }) => { return { color: isActive ? 'red' : 'grey' };}}>Home</NavLink>
        <NavLink to='/logs'style={({ isActive }) => { return { color: isActive ? 'red' : 'grey' };}}>Logs</NavLink>
    </nav>
  );
};
export default StyledNavbar