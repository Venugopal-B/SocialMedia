import React, { useContext, useState } from 'react';
import "./Navbar.scss";
import HomeIcon from '@mui/icons-material/HomeOutlined';
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined';
import GridIcon from '@mui/icons-material/GridViewOutlined';
import PersonIcon from '@mui/icons-material/PersonOutlined';
import MailIcon from '@mui/icons-material/MailOutlined';
import NotificationIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchIcon from '@mui/icons-material/SearchOutlined';
import WbSunnyIcon from '@mui/icons-material/WbSunnyOutlined';
import { Link } from 'react-router-dom';
import { DarkmodeContext } from '../../context/Context';
import { AuthContext } from '../../context/Authcontext';
import Logout from '../../Pages/Logout/Logout';

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkmodeContext);
  const { currentUser } = useContext(AuthContext);
  const [logoutOpen, setLogoutOpen] = useState(false);
  if (!currentUser) {
    return null; // Optional: Return null or a loading state if `currentUser` is not available
  }

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Social Media</span>
        </Link>
        
        <Link to="/"  style={{ color: 'inherit', textDecoration: 'none' }}>
        <HomeIcon className='Click'/>
        </Link>
        {darkMode ? (
          <WbSunnyIcon className='Click' onClick={toggle}/>
        ) : (
          <DarkModeIcon className='Click' onClick={toggle}/>
        )}
        <GridIcon className='Click'/>
        <div className="search">
          <SearchIcon className='Click'/>
          <input type="text" placeholder='Search'/>
        </div>
      </div>
      <div className="right">
        <PersonIcon className='Click'/>
        <MailIcon className='Click'/>
        <NotificationIcon className='Click'/>
        <div className="user">
          <Link to={`/profile/${currentUser.id}`}>
          <img  src={"/upload/" + currentUser.profilepic} alt={currentUser.name}/>

          </Link>
          <span onClick={() => setLogoutOpen(!logoutOpen)} >{currentUser.name}</span>
          {logoutOpen && (
            <Logout/>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
