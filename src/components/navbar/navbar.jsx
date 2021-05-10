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
import { LOGOUTCOMIC } from '../../redux/types/comicTypes';
import { LOGOUTSAVE } from '../../redux/types/saveComicTypes';
import { LOGOUTCART } from '../../redux/types/cartTypes';
import gif1 from '../../assets/img/adios.gif';


function Navbar(props) {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
 
    const history = useHistory();
 
    const logOut =  () => {
 
       props.dispatch({type: LOGOUT, payload : {}});
       props.dispatch({type: LOGOUTSAVE, payload : {}});
       props.dispatch({type: LOGOUTCOMIC, payload : {}});
       props.dispatch({type: LOGOUTCART, payload : {}});
 
       setTimeout(()=> {
           history.push('/');
       },5000);

       return(
         <div className="containerGif">
            <div className="gifLogout">
              <img src={gif1} alt="gif1"/>
            </div>
         </div>

       )

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