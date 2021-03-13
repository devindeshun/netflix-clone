import React from 'react';
import "./Nav.css";

function Nav() {
    return (
        <div className="nav nav__black">
            <div className="nav__contents">
                <img 
                    className="nav__logo"
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt=""
                />

                <img 
                    className="nav__avatar"
                    src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                    alt=""
                />
            </div>
        </div>
    )
}

export default Nav
