
import {Link, NavLink} from 'react-router-dom'
import './index.scss'
import LogoI from '../../../../images/LogoI.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faHome, faEnvelope, faUser} from '@fortawesome/free-solid-svg-icons'



const Sidebar = () => (
   <div className="nav-bar">
      <Link className='logo' to ='/'>
         <img  src= {LogoI} alt ="logo"/>
      </Link>
      <nav>
         <NavLink exact="true" activeclassname="active" to="/" >
            <FontAwesomeIcon icon={faHome} color="#836D6E"/>
         </NavLink>
         <NavLink exact="true"  activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#836D6E"/>
         </NavLink>
         <NavLink exact="true" activeclassname="active" className= "content-link" to="/contact" >
            <FontAwesomeIcon icon={faEnvelope} color="#836D6E"/>
         </NavLink>
      </nav>
      <ul>
         <li>
            <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/isabelle-cristine-crispim-de-souza-a618821a9/">
               <FontAwesomeIcon icon= {faLinkedin} color="efccd4"/>
            </a>
         </li>
         <li>
            <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/isabelledesouza">
               <FontAwesomeIcon icon= {faGithub} color="efccd4"/>
            </a>
         </li>
      </ul>
   </div>
          
       
   
)

export default Sidebar