import React from 'react';
import '../App.css';

class Navbar extends React.PureComponent {
    render() {
      return (
        <div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Reroll</li>
                </ul>
            </nav>
        </div>
      );
    }
  }

export default Navbar;
