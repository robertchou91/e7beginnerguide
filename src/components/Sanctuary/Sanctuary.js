import React, { Component } from 'react';
import { sanctuarydata } from './SanctuaryData';

class Orbis extends Component {
    render() {

		const { overview, overview2 } = sanctuarydata;

        return (
            <div className="sanctuary">
                <div className="u-center-text margin-bottom-small">
                    <h1 className="sanctuary__title">Sanctuary</h1>
                </div>
                <div className="sanctuary__toc">
					<p className="sanctuary__toc-title">Table of Contents</p>
					<ul className="sanctuary__toc-list">
						<li><a href="#overview">1. Quick Overview</a></li>
						<li><a href="#priorities">2. Priorities</a></li>
						<li><a href="#">3 Three Star Heroes</a></li>
						<li><a href="#">4. Suggestions</a></li>
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
						<h2 className="sanctuary__overview">Priorities</h2>
					</div>
					<div className="sanctuary__overview--content margin-bottom-small">{overview}</div>
					<img className="sanctuary__overiew--image margin-bottom-small" alt="breath of orbis" />
					<div className="sanctuary__overview--content">{overview2}</div>
				</div>
				<div className="u-center-text margin-bottom-medium">
					<div className="margin-bottom-small">
						<h2 className="sanctuary__overview">Quick Overview</h2>
					</div>
					<div className="sanctuary__overview--content margin-bottom-small">{overview}</div>
					<img className="sanctuary__overiew--image margin-bottom-small" alt="breath of orbis" />
					<div className="sanctuary__overview--content">{overview2}</div>
				</div>
				<div className="u-center-text margin-bottom-medium">
					<div className="margin-bottom-small">
						<h2 className="sanctuary__overview">Quick Overview</h2>
					</div>
					<div className="sanctuary__overview--content margin-bottom-small">{overview}</div>
					<img className="sanctuary__overiew--image margin-bottom-small" alt="breath of orbis" />
					<div className="sanctuary__overview--content">{overview2}</div>
				</div>
            </div>
        );
    }
}

export default Orbis;