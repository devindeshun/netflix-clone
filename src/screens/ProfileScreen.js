import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import Nav from '../Nav'
import './ProfileScreen.css'

function ProfileScreen() {
    const user = useSelector(selectUser);

    return (
        <div className="profileScreen">
            <Nav />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img 
                        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                        alt=""
                    />
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans</h3>
                            <div className="profileScreen__line"></div>
                            <div className="profileScreen__planType">
                                <h5>Basic Plan <br/>480p</h5>
                                <button className="profileScreen__subscribe">Subscribe</button>
                            </div>
                            <div className="profileScreen__planType">
                                <h5>Standard Plan <br/>720p</h5>
                                <button className="profileScreen__subscribe">Subscribe</button>
                            </div>
                            <div className="profileScreen__planType">
                                <h5>Premium Plan <br/>1080p</h5>
                                <button className="profileScreen__subscribe">Subscribe</button>
                            </div>
                            <button 
                                onClick={() => auth.signOut()} 
                                className="profileScreen__signOut"
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
