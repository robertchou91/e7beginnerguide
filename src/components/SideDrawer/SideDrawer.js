import React from 'react';
import { Link } from 'react-router-dom';

const sideDrawer = props => {
    let drawerClasses = "sidedrawer";
    if(props.show) {
        drawerClasses = "sidedrawer open";
    };

    return (
        <nav className={drawerClasses} onClick={props.close}>
            <ul className="sidedrawer__list">
                <li className="sidedrawer__list-item"><Link to='/'>Home</Link></li>
                <li className="sidedrawer__list-item"><Link to='/reroll'>Reroll</Link></li>
                <li className="sidedrawer__list-item"><Link to='/equipment'>Equipment</Link></li>
            </ul>
        </nav>
    )
};

export default sideDrawer;