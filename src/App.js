import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import Reroll from './components/Reroll/Reroll';
import Equipment from './components/Equipment';
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackDrop from './components/BackDrop/BackDrop';
import './scss/main.scss';



class App extends Component {
    state = {
        sideDrawerOpen: false
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };

    sideDrawerClosedHandler = () => {
        this.setState({sideDrawerOpen: false});
    }

    render() {
        let backDrop;
        
        if(this.state.sideDrawerOpen) {
            backDrop = <BackDrop click={this.sideDrawerClosedHandler} />;
        }

        return (
            <Router>
                <div className="App">
                    <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
                    <SideDrawer 
                        show={this.state.sideDrawerOpen}
                        close={this.sideDrawerClosedHandler}
                    />
                    {backDrop}
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
