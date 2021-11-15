import { NavLink } from 'react-router-dom';

import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to='./Home'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='./About'>
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='./BecomeaHost'>
              Become a Host
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='./Contact'>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='./FindaGroup'>
              Find a Group
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='./Login'>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='./SignUp'>
              Sign Up 
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;