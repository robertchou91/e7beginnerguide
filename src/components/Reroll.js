import React, { Component } from 'react';
import { herodata, rerolldata } from './RerollData';


class Reroll extends Component {

	state = {
		heroes: [],
		selectedHero4: null,
		selectedHero5: null
	};

	componentDidMount() {
		this.setState({ heroes: herodata });
	}
	onSelectDevice = (hero) => {
		this.setState({ selectedHero5: hero })
	}

	onSelectDevice2 = (hero) => {
		this.setState({ selectedHero4: hero })
	}


	render() {
		const { heroes, selectedHero5, selectedHero4 } = this.state;
		const { disclaimer } = rerolldata;
		
		return (
			<div className="reroll">
				<div className="u-center-text">
					<h1 className="reroll__title">Reroll Guide</h1>
				</div>
				<div>
					<h3>Table of Contents</h3>
				</div>
				<div>
					<h2>Disclaimer</h2>
				</div>
				<div>
					<p>{disclaimer}</p>
				</div>
				<div>
					<h2>Five Star Heroes</h2>
					{heroes.filter(hero => hero.hero5).map((hero, idx) => (
						<h3 onClick={(e) => this.onSelectDevice(hero)} key={idx}>{hero.hero5}</h3>
					))}
					{selectedHero5 ? (selectedHero5.hero_details.map((hero, idx) => (
						<div key={idx}>
							<h4>{hero.reason1}</h4>
							<h4>{hero.reason2}</h4>
						</div>
					))) : <div>Helloworld</div>}
				</div>
				<div>
					<h2>Four Star Heroes</h2>
					{heroes.filter(hero => hero.hero4).map((hero, idx) => (
						<h4 onClick={(e) => this.onSelectDevice2(hero)} key={idx}>{hero.hero4}</h4>
					))}
					{selectedHero4 ? (selectedHero4.hero_details.map((hero, idx) => (
						<div key={idx}>
							<h4>{hero.reason1}</h4>
							<h4>{hero.reason2}</h4>
						</div>
					))) : null}
				</div>
			</div>
		);
	}
}

export default Reroll;
