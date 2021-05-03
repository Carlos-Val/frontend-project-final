import React, {useState} from 'react';
import {connect} from 'react-redux';
import * as FaIcons from 'react-icons/fa';

import {Link} from 'react-router-dom';
import {SideBarData} from '../sideBarData/sideBarData';
import './navbar.css';
import './reset.css';
import {IconContext} from 'react-icons';
import {LOGOUT} from '../../redux/types/userTypes';
import {useHistory} from 'react-router-dom';


function Navbar(props) {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
 
    const history = useHistory();
 
    const logOut =  () => {
 
       props.dispatch({type: LOGOUT, payload : {}});
 
       setTimeout(()=> {
           history.push('/');
       },300);
   };
 
 
    return (
       <>
         <IconContext.Provider value={{ color: '#fff' }}>
           <div className='navbar'>
             <Link to='#' className='menu-bars'>
               <FaIcons.FaBars onClick={showSidebar} />
             </Link>
           </div>
           <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
             <ul className='nav-menu-items' onClick={showSidebar}>
               <li className='navbar-toggle'>
                 <Link to='#' className='menu-bars'>
                   <FaIcons.FaTimes />
                 </Link> 
               </li>
               {SideBarData.map((item, index) => {
                 return (
                   <div>
                     <li key={index.id} className={item.cName}>
                       <Link to={item.path}>
                         {item.icon}
                       </Link>
                     </li>
                     
                     
                   </div>
                 );
               })}
               <div className="btnLogOut" onClick={()=> logOut()}>
                   <FaIcons.FaPowerOff />
               </div>
             </ul>
           </nav>
         </IconContext.Provider>
       </>
     
 
    );
 };
 
 const mapStateToProps = state => {
     return{
       user: state.userReducer.user
     };
 };
 
 export default connect (mapStateToProps)(Navbar)