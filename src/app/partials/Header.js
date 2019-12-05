import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <div class="header">
            <div id="bitblog"><h1><b> BIT BLOG</b></h1></div>
            <div id="nav2">
                <Link to="/">Home</Link>
                <span> | </span>
                <Link to="/authors">Authors</Link>
                <span> | </span>
                <Link to="/about">About</Link>
            </div>

        </div>



    )

}

export default Header