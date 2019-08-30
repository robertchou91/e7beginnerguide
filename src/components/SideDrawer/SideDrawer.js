import React from 'react';
import { Link } from 'react-router-dom';

const sideDrawer = props => (
    <nav className="sidedrawer">
        <ul className="sidedrawer__list">
            <li className="sidedrawer__list-item"><Link to='/'>Home</Link></li>
			<li className="sidedrawer__list-item"><Link to='/reroll'>Reroll</Link></li>
			<li className="sidedrawer__list-item"><Link to='/equipment'>Equipment</Link></li>
        </ul>
    </nav>
);

export default sideDrawer;