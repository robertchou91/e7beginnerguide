import React from 'react';
import { Link } from 'react-router-dom';
import raphi from '../../images/raphi.png';
import e7logo from '../../images/e7logo.png';


class Navbar extends React.PureComponent {
	render() {
		return (
			<header className="navbar">
				<nav className="navbar__navigation">
					<div className="container">
						<div></div>
						<div className="nav__brand">
							<Link to='/'><img className="owner-logo" src={raphi} alt="icon" /></Link>
						</div>
						<ul className="nav__list">
							<li className="nav__list-item"><Link to='/'>Home</Link></li>
							<li className="nav__list-item"><Link to='/reroll'>Reroll</Link></li>
							<li className="nav__list-item"><Link to='/equipment'>Equipment</Link></li>
						</ul>
					</div>
				</nav>
			</header>
		);
	}
}

export default Navbar;
