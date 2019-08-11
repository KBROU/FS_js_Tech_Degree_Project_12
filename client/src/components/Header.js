//Header component displays logo, search bar, nav links, and the images. Also handles logic if pictures have loaded or not. If they have not loaded the Loading text is displayed.
import React from 'react';
import Navibar from './Navibar';
import JumboTitle from './JumboTitle';

const Header = (props) => {
  return(
    <header>
      <Navibar
        loggedIn={props.loggedIn}
        test={props.nameTest}
        name={props.name}
        photo={props.photo}
      />
      <JumboTitle
        loggedIn={props.loggedIn}
      />
    </header>
  )
}
export default Header;
