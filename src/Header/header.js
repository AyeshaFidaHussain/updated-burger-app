import React from 'react'
import './header.css'
import burgerlogo from '../assets/burgerlogo.png'
import {Link} from 'react-router-dom';
function Header()
{
 return (
   <div className="header">
     <div className='logo-img-bg'>
     <img src={burgerlogo}  alt="Buger logo " className='logo-img'/>
     </div>
      <div className="hrefs">
          <ul>
              <li><Link to='/'>Burger Builder</Link></li>
              <li><Link to='/Login'>Login</Link></li>
          </ul>
      </div>
   </div>
 )
}

export {Header}