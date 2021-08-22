import React from 'react';
import Nav from '../Nav';

function Header(props) {
    return (
    <header>
        <Nav 
        setRenderAbout={props.setRenderAbout}
        setRenderPortfolio={props.setRenderPortfolio}
        setRenderContact={props.setRenderContact}
        setRenderResume={props.setRenderResume}
        />
    </header>
    )
}

export default Header;