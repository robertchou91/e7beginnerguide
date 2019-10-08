import React, { Component } from 'react';
import { sanctuarydata } from './SanctuaryData';

class Sanctuary extends Component {
    render() {

		const { overview, overview2, priority, forestofsoul, highcommand, lowpriority, steelworkshop, steeple, heartoforbis, note1, note12, note13, note14, note15, note16, note2 } = sanctuarydata;

        return (
            <div className="sanctuary">
                <div className="u-center-text margin-bottom-small">
                    <h1 className="sanctuary__title">Sanctuary</h1>
                </div>
                <div className="sanctuary__toc">
					<p className="sanctuary__toc-title">Table of Contents</p>
					<ul className="sanctuary__toc-list">
						<li><a href="#overview">1. Quick Overview</a></li>
						<li><a href="#priorities">2. High Priorities</a></li>
						<li><a href="#lowpriorities">3 Low Priorities</a></li>
						<li><a href="#note">4. Side Note</a></li>
					</ul>
				</div>
				<div id="overview"></div>
                <div className="u-center-text margin-bottom-medium">
					<div className="margin-bottom-small">
						<h2 className="sanctuary__overview">Quick Overview</h2>
					</div>
					<div className="sanctuary__overview--content margin-bottom-small">{overview}</div>
					<img className="sanctuary__overiew--image margin-bottom-small" alt="breath of orbis" />
					<div className="sanctuary__overview--content">{overview2}</div>
				</div>
				<hr id="priorities" className="linebreak"></hr>
				<div className="u-center-text margin-bottom-medium">
					<div className="margin-bottom-small">
						<div className="sanctuary__overview">High Priorities</div>
					</div>
					<div className="sanctuary__overview--content margin-bottom-medium">{priority}</div>
					<div className="margin-bottom-medium">
						<div className="sanctuary__overview--sub margin-bottom-small">Forest of Souls</div>
						<div className="sanctuary__overview--content margin-bottom-small">{forestofsoul}</div>
						<img className="sanctuary__overiew--image margin-bottom-small" alt="breath of orbis" />
					</div>
					<div className="margin-bottom-small">
						<div className="sanctuary__overview--sub margin-bottom-small">High Command</div>
						<div className="sanctuary__overview--content margin-bottom-small">{highcommand}</div>
						<img className="sanctuary__overiew--image margin-bottom-small" alt="breath of orbis" />
					</div>
				</div>
				<hr id="lowpriorities" className="linebreak"></hr>
				<div className="u-center-text margin-bottom-medium">
					<div className="margin-bottom-small">
						<h2 className="sanctuary__overview">Low Priorities</h2>
					</div>
					<div className="sanctuary__overview--content margin-bottom-medium">{lowpriority}</div>
					<div className="margin-bottom-medium">
						<div className="sanctuary__overview--sub margin-bottom-small">Heart of Orbis</div>
						<div className="sanctuary__overview--content margin-bottom-small">{heartoforbis}</div>
						<img className="sanctuary__overiew--image margin-bottom-small" alt="breath of orbis" />
					</div>
					<div className="margin-bottom-medium">
						<div className="sanctuary__overview--sub margin-bottom-small">Steel Workshop</div>
						<div className="sanctuary__overview--content margin-bottom-small">{steelworkshop}</div>
						<img className="sanctuary__overiew--image margin-bottom-small" alt="breath of orbis" />
					</div>
					<div className="margin-bottom-medium">
						<div className="sanctuary__overview--sub margin-bottom-small">Alchemist's Steeple</div>
						<div className="sanctuary__overview--content margin-bottom-small">{steeple}</div>
						<img className="sanctuary__overiew--image margin-bottom-small" alt="breath of orbis" />
					</div>
				</div>
				<hr id="note" className="linebreak"></hr>
				<div className="u-center-text margin-bottom-medium">
					<div className="margin-bottom-small">
						<h2 className="sanctuary__note">Side Note</h2>
					</div>
					<div className="sanctuary__note--content margin-bottom-small">
						<p className="margin-bottom-small">{note1}</p>
						<ul className="margin-bottom-small">
							<li>{note12}</li>
							<li>{note13}</li>
							<li>{note14}</li>
							<li>{note15}</li>
							<li>{note16}</li>
						</ul>
						<p>{note2}</p>
					</div>
				</div>
            </div>
        );
    }
}

export default Sanctuary;