import React from 'react';
import './navbar.css';
import '../../App.css';

const Navbar = ()=>  {
    
   function handleRoomsComponent() {     
    alert('Button was clicked!');    
   }

   const handleClick = (event) => {
    if (event instanceof Event) {
      alert('Native Event Triggered!');
    } else {
      alert('React Synthetic Event Triggered!');
    }
  };
    
    
    return (
        <div className="n-wrapper">
            <div className="n-left">
            <div className="n-name">Home</div>
            <span>toggle</span>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <li>Home</li>                   
                        <li>Photo</li>
                        <li>Services</li>
                        <li>Facebook</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <button className="button nav-button" onClick={handleRoomsComponent}>Rooms</button>
                <button className="button nav-button" onClick={handleClick}>Click Me</button>
                

            </div>
        </div>
    )
}

export default Navbar;