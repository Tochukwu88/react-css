import React, { useState } from "react";
import Logo from '../../img/logo.png'
import './Header.css'


function Header() {
    const [toggle, setToggle] = useState(false)

    let dropDown = 'nav'
    if(toggle){
        dropDown=' nav open'
    }
     
    const handleToggle = () =>{
       
      setToggle(!toggle)
    }
    return(
       <section className='head-section'>
       <nav className={dropDown}>
       <div className='nav-menu'>
           <div className='nav-brand'><img src ={Logo} alt='Logo'></img></div>
        <button className="nav-toggle" onClick={handleToggle} >
                    <span className='hamburger'></span>
                </button>
           <ul className='nav-lists'>
           <li className='nav-items'>home</li>
           <li className='nav-items'>about</li>
           <li className='nav-items'>pricing</li>
           <li className='nav-items'>contact</li>

           </ul>
       </div>


       </nav>
       {/* <nav className='mnav'>
       <div className='mnav-menu'>
           
    
           <ul className='mnav-lists'>
           <li className='mnav-items'>home</li>
           <li className='mnav-items'>about</li>
           <li className='mnav-items'>pricing</li>
           <li className='mnav-items'>contact</li>

           </ul>
       </div>


       </nav> */}
           
       </section>
    )
    
}

export default Header;