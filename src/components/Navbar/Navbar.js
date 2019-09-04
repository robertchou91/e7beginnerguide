import React from 'react';
import { Link } from 'react-router-dom';
import raphi from '../../images/raphi.png';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';


const Navbar = props => (
	<header className="navbar">
		<nav className="navbar__navigation">
			<div className="navbar__toggle-button">
				<DrawerToggleButton click={props.drawerClickHandler} />
			</div>
			<div className="navbar__brand">
				<Link to='/'><img className="owner-logo" src={raphi} alt="icon" /></Link>
			</div>
			<ul className="navbar__list">
				<li className="navbar__list-item"><Link to='/'>Home</Link></li>
				<li className="navbar__list-item"><Link to='/reroll'>Reroll</Link></li>
				<li className="navbar__list-item"><Link to='/equipment'>Equipment</Link></li>
			</ul>
		</nav>
	</header>

);

export default Navbar;
