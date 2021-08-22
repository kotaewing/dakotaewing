import React from 'react';
import Nav from '../Nav';

function Header(props) {
    return (
    <header>
        <Nav 
        renderAbout={props.renderAbout}
        setRenderAbout={props.setRenderAbout}
        renderPortfolio={props.renderPortfolio}
        setRenderPortfolio={props.setRenderPortfolio}
        renderContact={props.renderContact}
        setRenderContact={props.setRenderContact}
        renderResume={props.renderResume}
        setRenderResume={props.setRenderResume}
        />
    </header>
    )
}

export default Header;