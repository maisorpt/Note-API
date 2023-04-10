import React from 'react';
import PropTypes from "prop-types";
import ThemeContext from '../context/ThemeContext';
import { FiHome, FiPlusCircle, FiLogOut, FiArchive  } from 'react-icons/fi';
import {FaMoon, FaSun} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import LocalContext from '../context/LocalContext';


function Navigation({logout, name}) {
  const {local, toggleLocal} =React.useContext(LocalContext);
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  return (
    <nav>
      <ul className="nav">
        <li>
          <Link to="/"><FiHome/></Link>
        </li>
        <li>
          <Link to="/archived"><FiArchive/></Link>
        </li>
        <li>
          <Link to="/create-note"><FiPlusCircle/></Link>
        </li>
        <li>
        <button onClick={toggleTheme}>
    {theme === 'light' ? <FaMoon /> : <FaSun />}
  </button>
        </li>
        <li>
        <button onClick={toggleLocal}>
    {local === 'id' ? "EN" : "ID"}
  </button>
        </li>
        <li>
          <button onClick={logout}>{name} <FiLogOut /></button>
        </li>
        
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func,
  name: PropTypes.string,

};

export default Navigation;
