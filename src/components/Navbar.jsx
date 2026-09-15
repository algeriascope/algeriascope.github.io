import react from 'react';
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom';

const navbar = () => {

  return (
    <ul styles>
    
      <li>
        <Link to="/">algeriascope</Link>
      </li>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/exchange">exchange</Link>
      </li>
    </ul>
  );
};

export default navbar;
