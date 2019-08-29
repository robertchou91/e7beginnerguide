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
							<Link to='/'><li className="nav__list-item">Home</li></Link>
							<Link to='/reroll'><li className="nav__list-item">Reroll</li></Link>
							<Link to='/equipment'><li className="nav__list-item">Equipment</li></Link>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;
