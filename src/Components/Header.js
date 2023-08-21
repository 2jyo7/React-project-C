import React from 'react';
import { Cloth_Logo } from './Constants';

const Header = () => {
    return (
        <div>
            <div className="header">
                <img src={Cloth_Logo} id='logo' alt='clothing app logo'/>
                
             <div className ='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>ContactUs</li>
                    <li>Cart</li>
                </ul>
                
             </div>
            </div>
        </div>
    )
}
export default Header;