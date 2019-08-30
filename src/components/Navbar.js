import React from 'react';
import { Link } from 'react-router-dom';
import raphi from '../images/raphi.png';


class Navbar extends React.PureComponent {
	render() {
		return (
			<div className="nav">
				<nav>
					<div className="container">
						<div className="nav__brand">
							<Link to='/'><img src={raphi} alt="icon" /></Link>
						</div>
						<ul className="nav__list">
							<li className="nav__list-item"><Link to='/'>Home</Link></li>
							<li className="nav__list-item"><Link to='/reroll'>Reroll</Link></li>
							<li className="nav__list-item"><Link to='/equipment'>Equipment</Link></li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;
