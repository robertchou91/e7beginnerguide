import React, { Component } from 'react';
import '../App.css';


const data = [
	{
		hero5: 'Ravi',
		hero_details: [
			{
				reason1: 'ravi1',
				reason2: 'ravi2'
			}
		]
	},
	{
		hero5: 'Vildred',
		hero_details: [
			{
				reason1: 'vildred1',
				reason2: 'vildred2'
			}
		]
	},
	{
		hero4: 'Angelica',
		hero_details: [
			{
				reason1: 'angelica1',
				reason2: 'angelica2'
			}
		]
	},
	{
		hero4: 'Clarissa',
		hero_details: [
			{
				reason1: 'clarissa1',
				reason2: 'clarissa2'
			}
		]
	}
]

class Reroll extends Component {

	constructor(props, context) {
    super(props, context);
    this.state = {
      heroes5: [],
			selectedHero5:null,
			heroes4: [],
      selectedHero4:null
    };
  }

  componentDidMount() {
		this.setState({ heroes5: data });
		this.setState({ heroes4: data });
  }
  onSelectDevice = (hero) => {
    this.setState({  selectedHero5:hero })
	}

	onSelectDevice2 = (hero) => {
    this.setState({  selectedHero4:hero })
	}
	

	render() {
		const { heroes5,selectedHero5, heroes4,selectedHero4 } = this.state;

		return (
			<div>
				<div>
					<h1>Reroll Guide</h1>
				</div>
				<div>
					<h3>Table of Contents</h3>
				</div>
				<div>
					<h2>Disclaimer</h2>
				</div>
				<div>
					<p>These are what I would recommend to start with based on my own experience. This rerolling guide is not to pidgeon hole you into specific units. You are free to start with any Hero you want.</p>
				</div>
				<div>
					<h2>Five Star Heroes</h2>
					{heroes5.map((hero, idx) => (
            <h4 onClick={(e)=>this.onSelectDevice(hero)} key={idx}>{hero.hero5}</h4>
					))}
          {selectedHero5?(selectedHero5.hero_details.map((hero, idx) => (
						<div key={idx}>
							<h4>{hero.reason1}</h4>
              <h4>{hero.reason2}</h4> 
						</div>
          ))):<div>Helloworld</div>}
				</div>
				<div>
					<h2>Four Star Heroes</h2>
					{heroes4.map((hero, idx) => (
            <h4 onClick={(e)=>this.onSelectDevice2(hero)} key={idx}>{hero.hero4}</h4>
					))}
          {selectedHero4?(selectedHero4.hero_details.map((hero, idx) => (
						<div key={idx}>
							<h4>{hero.reason1}</h4>
              <h4>{hero.reason2}</h4> 
						</div>
          ))):null}
				</div>
			</div>
		);
	}
}

export default Reroll;
