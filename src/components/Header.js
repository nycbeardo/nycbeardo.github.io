import React from 'react'
import PropTypes from 'prop-types'


const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        
    <div className="logo">
    <span className="icon fa-keyboard"></span>
</div>
        <div className="content">
            <div className="inner">
                <h1>Montique Stevens</h1>
                <p>User Interface + User Expierence Designer </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Projects</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('skills')}}>Skills</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
