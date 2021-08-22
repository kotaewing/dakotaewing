import React from 'react';
import Nav from '../Nav';

function Header(props) {
    return (
    <header>
        <Nav 
          categories={props.categories}
          setCurrentCategory={props.setCurrentCategory}
          currentCategory={props.currentCategory}
          contactSelected={props.contactSelected}
          setContactSelected={props.setContactSelected}/>
    </header>
    )
}

export default Header;