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
		const { disclaimer, suggestion } = rerolldata;
		
		return (
			<div className="reroll">
				<div className="u-center-text">
					<h1 className="reroll__title">Reroll Guide</h1>
				</div>
				<div>
					<h3>Table of Contents</h3>
				</div>
				<div className="u-center-text margin-bottom-medium">
					<div className="margin-bottom-small">
						<h2 className="reroll__disclaimer">Disclaimer</h2>
					</div>
					<p className="reroll__disclaimer--content">{disclaimer}</p>
				</div>
				<hr className="linebreak" />
				<div className="reroll__fivestar">
					<div className="u-center-text margin-bottom-small">
						<h2 className="reroll__fivestar--title">Five Star Heroes</h2>
					</div>
					<div className="reroll__fivestar--container">
						{heroes.filter(hero => hero.hero5).map((hero, idx) => (
							<div className="reroll__fivestar--list" onClick={() => this.onSelectDevice(hero)} key={idx}>
								<div className="reroll__fivestar--hero">
									<p className="hero5name">{hero.hero5}</p>
									<img className="hero5img" src={hero.hero5smallimg} alt={hero.hero5} />
								</div>
								
							</div>
						))}
					</div>
					<div className="u-center-text margin-bottom-medium">
						{selectedHero5 ? (selectedHero5.hero_details.map((hero, idx) => (
							<div className="reroll__selected5" key={idx}>
								<div className="reroll__selected5--image">
									<img src={hero.hero5fullimg} alt={hero.hero5} />
								</div>
								<div className="reroll__selected5--reasons">
									<ul>
										<li>{hero.reason1}</li>
										<li>{hero.reason2}</li>
									</ul>
								</div>
							</div>
						))) : 
							<div className="u-center-text">
								<div className="reroll__selectedfive">
									<div className="reroll__selectedfive--content">Select A Hero</div>
								</div>
							</div>
						}
					</div>
					
				</div>
				<hr className="linebreak"/>
				<div className="reroll_fourstar">
					<div className="u-center-text margin-bottom-small">
						<h2 className="reroll__fourstar--title">Four Star Heroes</h2>
					</div>
					<div className="reroll__fourstar--container">
						{heroes.filter(hero => hero.hero4).map((hero, idx) => (
							<div className="reroll__fourstar--list" onClick={() => this.onSelectDevice2(hero)} key={idx}>
								<div className="reroll__fourstar--hero">
									<p className="hero4name">{hero.hero4}</p>
									<img className="hero4img" src={hero.hero4smallimg} alt={hero.hero4} />
								</div>
							</div>
						))}
					</div>
					
					<div className="u-center-text margin-bottom-medium">
						{selectedHero4 ? (selectedHero4.hero_details.map((hero, idx) => (
							<div className="reroll__selected4" key={idx}>
								<div className="reroll__selected4--image">
									<img src={hero.hero4fullimg} alt={hero.hero4} />
								</div>
								<div className="reroll__selected4--reasons">
									<ul>
										<li>{hero.reason1}</li>
										<li>{hero.reason2}</li>
									</ul>
								</div>
							</div>
						))) : 
							<div className="u-center-text">
								<div className="reroll__selectedfour">
									<div className="reroll__selectedfive--content">Select A Hero</div>
								</div>
							</div>
						}
					</div>
				</div>
				<hr className="linebreak"/>
				<div className="reroll__suggestion">
					<div className="u-center-text margin-bottom-medium">
						<div className="margin-bottom-small">
							<h2 className="reroll__suggestion-title">Suggestions</h2>
						</div>
						<p className="reroll__suggestion-content">{suggestion}</p>
					</div>
					<div className="reroll__suggestion-pvp">
						<div className="reroll__suggestion-pvp--title">PVP</div>
						<div className="reroll__suggsetion-pvp--content">
							<div>
								<div>Fire Ken 4 star unit</div>
								<div>info</div>
							</div>
							<div>
								<div>Vildred 4 star unit</div>
								<div>info</div>
							</div>
							<div>
								<div>Iseria 4 star unit</div>
								<div>info</div>
							</div>
						</div>
					</div>
					<div className="reroll__suggestion-pve">
						<div className="reroll__suggestion-pve--title">PVE</div>
						<div className="reroll__suggsetion-pve--content">
							<div>
								<div>
									<div>Ravi 4 star unit</div>
									<div>Vildred 4 star unit</div>
									<div>Fire Ken 4 star unit</div>
								</div>
								<div>info</div>
							</div>
						</div>
					</div>
					<div className="reroll__suggestion-farming">
						<div className="reroll__suggestion-farming--title">Farming</div>
						<div className="reroll__suggsetion-pvp--content">
							<div>
								<div>
									<div>Vildred 4 star unit</div>
									<div>Tywin 4 star unit</div>
									<div>Sez 4 star unit</div>
								</div>
								<div>info</div>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		);
	}
}

export default Reroll;
