import React from 'react';
import './Menu.css';
import {NavLink} from 'react-router-dom';
import {homePage,coursesPage,formPage} from '../../navigation/Paths';
import { ReactSVG }from 'react-svg';
import homeSvg from '../../assets/img/homeSVG.svg'
import coursesSvg from '../../assets/img/coursesSVG.svg'
import formSvg from '../../assets/img/formSVG.svg'

const Menu = () => {
    return (
        <header className="menu">
            <nav>
                <ul>
                    <li className="menu-home">            
                        <NavLink to={homePage} exact activeClassName="active">
                            <ReactSVG src={homeSvg} />
                        </NavLink>
                    </li>
                    <li className="menu-courses">            
                        <NavLink to={coursesPage} activeClassName="active">
                            <ReactSVG src={coursesSvg} />
                        </NavLink>
                    </li>
                
                    <li className="menu-form">
                        <NavLink to={formPage}  activeClassName="active" >
                            <ReactSVG src={formSvg} />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
 
export default Menu;