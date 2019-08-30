import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import Reroll from './components/Reroll';
import Equipment from './components/Equipment';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './scss/style.scss';



class App extends React.PureComponent {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar />
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
