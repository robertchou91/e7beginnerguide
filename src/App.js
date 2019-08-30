import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import Reroll from './components/Reroll';
import Equipment from './components/Equipment';
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackDrop from './components/BackDrop/BackDrop';
import './scss/style.scss';



class App extends React.PureComponent {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar />
                    <SideDrawer />
                    <BackDrop />
                    <main>
                        <Route path='/' exact component={Home} />
                        <Route path='/reroll' component={Reroll} />
                        <Route path='/equipment' component={Equipment} />
                    </main>
                </div>
            </Router>

        );
    }
}


export default App;
