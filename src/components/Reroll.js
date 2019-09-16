import React, { Component } from 'react';
import { herodata, rerolldata } from './RerollData';

import iseriasmall from '../images/iseriasmall.png';
import kensmall from '../images/kensmall.png';
import ravismall from '../images/ravismall.png';
import sezsmall from '../images/sezsmall.png';
import tywinsmall from '../images/tywinsmall.png';
import vildredsmall from '../images/vildredsmall.png';

class Reroll extends Component {

	state = {
		heroes: [],
		selectedHero3: null,
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

	onSelectDevice3 = (hero) => {
		this.setState({ selectedHero3: hero })
	}


	render() {
		const { heroes, selectedHero5, selectedHero4, selectedHero3 } = this.state;
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
									<div className="reroll__selectedfour--content">Select A Hero</div>
								</div>
							</div>
						}
					</div>
				</div>
				<hr className="linebreak"/>
				<div className="reroll_threestar">
					<div className="u-center-text margin-bottom-small">
						<h2 className="reroll__fourstar--title">Three Star Heroes</h2>
					</div>
					<div className="reroll__threestar--container">
						{heroes.filter(hero => hero.hero3).map((hero, idx) => (
							<div className="reroll__threestar--list" onClick={() => this.onSelectDevice3(hero)} key={idx}>
								<div className="reroll__threestar--hero">
									<p className="hero3name">{hero.hero3}</p>
									<img className="hero3img" src={hero.hero3smallimg} alt={hero.hero3} />
								</div>
							</div>
						))}
					</div>
					<div className="u-center-text margin-bottom-medium">
						{selectedHero3 ? (selectedHero3.hero_details.map((hero, idx) => (
							<div className="reroll__selected3" key={idx}>
								<div className="reroll__selected3--image">
									<img src={hero.hero3fullimg} alt={hero.hero3} />
								</div>
								<div className="reroll__selected3--reasons">
									<ul>
										<li>{hero.reason1}</li>
										<li>{hero.reason2}</li>
									</ul>
								</div>
							</div>
						))) : 
							<div className="u-center-text">
								<div className="reroll__selectedthree">
									<div className="reroll__selectedthree--content">Select A Hero</div>
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
					<div className="reroll__suggestion-priority">
						<div className="reroll__suggestion-priority--high">
							<div className="fontsize-medium">High Priority</div>
							<div><img src={kensmall} alt="Ken" /></div>
							<div><img src={vildredsmall} alt="Vildred" /></div>
						</div>
						<hr className="linebreak-mini" />
						<div className="reroll__suggestion-priority--medium">
							<div className="fontsize-medium">Medium Priority</div>
							<div><img src={iseriasmall} alt="Iseria" /></div>
							<div><img src={ravismall} alt="Ravi" /></div>
						</div>
						<hr className="linebreak-mini" />
						<div className="reroll__suggestion-priority--low margin-bottom-small">
							<div className="fontsize-medium">Low Priority</div>
							<div><img src={tywinsmall} alt="Tywin" /></div>
							<div><img src={sezsmall} alt="Sez" /></div>
						</div>
					</div>
					<div className="reroll__suggestion-notes">
						<div>Notes</div>
						<ul>
							<li>notes notes notes</li>
							<li>notes notes notes</li>
							<li>notes notes notes</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Reroll;
