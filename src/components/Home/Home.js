import React, { Component } from 'react';
import { guides, homedata } from './HomeData';

import raphixd from '../../images/raphixd.png';

const guidelist = guides.map((guide, idx) => (
    <div className="home__guide" key={idx}>
        <img  className="home__guide-image" alt="imgplaceholder" />
        <div className="home__guide-description">{guide.title}</div>
    </div>
));

class Home extends Component {
    render() {

        const { intro } = homedata;

        return (
            <div className="home">
                <div className="u-center-text margin-bottom-small">
                    <h1 className="home__title">E7 Beginner Guide</h1>
                </div>
                <div className="u-center-text">
                    <div className="home__intro">
                        <h2 className="home__intro-description">{intro}</h2>
                        <img className="home__intro-image" src={raphixd} alt="raphixd" />
                    </div>
                </div>
                <div className="home__guides u-center-text">
                    <div className="home__guides-title">Guides</div>
                    {guidelist}
                </div>
            </div>
        );
    }
}

export default Home;
