import React, { Component } from 'react';
import { orbisdata } from './OrbisData';

class Orbis extends Component {
    render() {

		const { content } = orbisdata;

        return (
            <div className="orbis">
                <div className="u-center-text margin-bottom-small">
                    <h1 className="orbis__title">Orbis</h1>
                </div>
                <div className="orbis__toc margin-bottom-medium">
					<p className="orbis__toc-title">Table of Contents</p>
					<ul className="orbis__toc-list">
						<li><a href="#">1. Breath of Orbis</a></li>
						<li><a href="#">2. Four Star Heroes</a></li>
						<li><a href="#">3 Three Star Heroes</a></li>
						<li><a href="#">4. Suggestions</a></li>
					</ul>
				</div>
                <div className="u-center-text margin-bottom-medium">
					<div className="margin-bottom-small">
						<h2 className="orbis__breathoforbis">Breath of Orbis</h2>
					</div>
					<p className="orbis__breathoforbis--content">{content}</p>
				</div>
            </div>
        );
    }
}

export default Orbis;