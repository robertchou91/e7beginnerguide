import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class Navbar extends React.PureComponent {
	render() {
		return (
			<div>
				<nav>
					<ul>
						<Link to='/'><li>Home</li></Link>
						<Link to='/reroll'><li>Reroll</li></Link>
						<Link to='/equipment'><li>Equipment</li></Link>
					</ul>
				</nav>
			</div>
		);
	}
}

export default Navbar;
