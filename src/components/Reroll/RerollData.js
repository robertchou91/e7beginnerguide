import iseriasmall from '../../images/iseriasmall.png';
import kensmall from '../../images/kensmall.png';
import ravismall from '../../images/ravismall.png';
import sezsmall from '../../images/sezsmall.png';
import tywinsmall from '../../images/tywinsmall.png';
import vildredsmall from '../../images/vildredsmall.png';

import angelicasmall from '../../images/angelicasmall.png';
import arminsmall from '../../images/arminsmall.png';
import ciddsmall from '../../images/ciddsmall.png';
import clarissasmall from '../../images/clarissasmall.png';
import corvussmall from '../../images/corvussmall.png';
import karinsmall from '../../images/karinsmall.png';
import schurismall from '../../images/schurismall.png';

import montmorancysmall from '../../images/montmorancysmall.png';
import klurismall from '../../images/klurismall.png';

import iseriafull from '../../images/iseriafull.png';
import kenfull from '../../images/kenfull.png';
import ravifull from '../../images/ravifull.png';
import sezfull from '../../images/sezfull.png';
import tywinfull from '../../images/tywinfull.png';
import vildredfull from '../../images/vildredfull.png';

import angelicafull from '../../images/angelicafull.png';
import arminfull from '../../images/arminfull.png';
import ciddfull from '../../images/ciddfull.png';
import clarissafull from '../../images/clarissafull.png';
import corvusfull from '../../images/corvusfull.png';
import karinfull from '../../images/karinfull.png';
import schurifull from '../../images/schurifull.png';

import montmorancyfull from '../../images/montmorancyfull.png';
import klurifull from '../../images/klurifull.png';

export const rerolldata = {
	disclaimer: "This Reroll Guide is not about explaining how to reroll or what is the fastest approach to rerolling in this game. This guide is about me giving you some suggestions on which units to start the game out with based on my own experience. It is not to pidgeonhole you into specific units. You are free to start with any Hero you want.",
	suggestion1: "Generally when people are rerolling, they look for their preferred five star unit and one other four star unit to start their adventure (you can get more four stars if you are lucky in that one batch of ten pulls). I do not think any of the natural element four stars outside of maybe Angelica are game changing for your progession so Selective Summon is mostly about finding the right starting five star unit for you.", 
	suggestion2: "So with that in mind I have made different levels of priorities of the five star units that I think are a good choice to start with in your selective summons below. You should be choosing your five star unit based on what you want to do in the game.", 
	suggestion3: "For example if you want to focus purely on PVE then maybe Vildred and Ravi are the better options. If you want to gamble on the chance of pulling Tamarinne or Dark Corvus in the future, it is not a bad choice to start with Iseria.", 
	suggestion4: "Just a reminder there are some three star units that are great and should not be overlooked (I have mentioned two specific three star units above).",
	notes1: "Ken and Vildred have the most value in terms of being standalone and being useful is almost every content in the game PVP and PVE.",
	notes2: "Iseria and Ravi are niche units that shine in certain scenarios. Unless you have the units that works best with Iseria or you are mostly focused on the PVE aspect (referring to Ravi) then they are not as good as Ken and Vildred for selections.",
	notes3: "Units placed in the low priority are not really units I would suggest to start out with but they can make some parts of your progressions easier just not as much as the high and medium priority overall.",
	notes4: "If you prefer having a much safer progression as an extra precaution then I do suggest having the four star Angelica alongside a 5 star unit just to be on the safe side."
}


export const herodata = [
	{
		hero5: "Iseria",
		hero5smallimg: iseriasmall,
		hero_details: [
			{
				hero5: "Iseria",
				hero5fullimg: iseriafull,
				reason1: "Oathkeeper skill is able to reset the cooldown of an ally's skills while also granting herself an extra turn. This can create some powerful combinations in PVP (Tamarinne and Dark Corvus are usually the units you pair her up with).",
				reason2: "Her Full Bloom dispels all buffs then applies a 2 turn Defense Break and Unbuffable debuff (Useful in PVP due to how how prominent Immunity sets are in PVP and can set up strong power plays for PVP offense)."
			}
		]
	},
	{
		hero5: "Ken",
		hero5smallimg: kensmall,
		hero_details: [
			{
				hero5: "Ken",
				hero5fullimg: kenfull,
				reason1: "All-rounder bruiser that is capable of tanking, dealing damage, debuffing (Attack Down, Defense Break, Stun, Burn), and self-buffing himself with Speed Buff and Vigor (Grants Ken 30% Attack and Defense).",
				reason2: "One of the best and most widely used bruisers in the game when it comes Guild Wars PVP."
			}
		]
	},
	{
		hero5: "Ravi",
		hero5smallimg: ravismall,
		hero_details: [
			{
				hero5: "Ravi",
				hero5fullimg: ravifull,
				reason1: "Her built-in sustain and combat readiness makes her a great unit to start out with as she can easily carry most contents the game has to offer.",
				reason2: "She has high damage multipliers on her first skill, Slaugher, when using Soul Burn which makes bossing quite easy. Her third skill, Devil Drive, also allows fighting a boss with multiple enemies much more manageable as it decrease enemy combat readiness to 0 while also have a 75% chance of stunning."
			}
		]
	},
	{
		hero5: "Sez",
		hero5smallimg: sezsmall,
		hero_details: [
			{
				hero5: "Sez",
				hero5fullimg: sezfull,
				reason1: "Very good at farming. Not as good as Vildred but he farms decently fast because of his second skill, Enroach.",
				reason2: "Despite the nerf to windrider, Sez is still an okay option in a cleave team in Arena PVP and Guild Wars but he starts to fall off more and more the higher rank you are in PVP in comparison to other cleave team compositions."
			}
		]
	},
	{
		hero5: "Tywin",
		hero5smallimg: tywinsmall,
		hero_details: [
			{
				hero5: "Tywin",
				hero5fullimg: tywinfull,
				reason1: "Good ice type knight that can tank the wyvern in Wyvern 11 farm and thereby jumpstarting your progression when it comes to gearing your units.",
				reason2: "Decent support unit for a cleave team for Arena and Guild Wars PVP (Soul burn for aoe Defense Break and then increasing Combat Readiness to an ally unit)."
			}
		]
	},
	{
		hero5: "Vildred",
		hero5smallimg: vildredsmall,
		hero_details: [
			{
				hero5: "Vildred",
				hero5fullimg: vildredfull,
				reason1: "Arguably the best farmer in the game. Farming in Epic Seven is important as you level your Phantasma in order to 6 star hero units and Vildred excels in this area. Easy to gear due to Adventure's Path and Labyrinth providing gears that works well with him.",
				reason2: "The only 5 star hero that has speed as his imprint. Strong in pvp offense when it comes to cleaving."
			}
		]
	},
	{
		hero4: "Angelica",
		hero4smallimg: angelicasmall,
		hero_details: [
			{
				hero4: "Angelica",
				hero4fullimg: angelicafull,
				reason1: "Immunity Buff coverage for the entire team is very valuable when trying to clear Abyss floors and Labyrinth Raid.",
				reason2: "Have good burst heal on a rather short cooldown which allows new players more room for errors."
			}
		]
	},
	{
		hero4: "Armin",
		hero4smallimg: arminsmall,
		hero_details: [
			{
				hero4: "Armin",
				hero4fullimg: arminfull,
				reason1: "In my opinion one of the best tanks when it comes to clearing Abyss. Shield Wall provides team wide barriers for 3 turns while also healing based on target max hp. Flash of Light provides the needed Hit Chance Down debuffs in abyss to prevent your team from taking too much damage. Flash of Light also provides a 3 turn Poison debuff (Poison debuffs are very good in Abyss since enemies and bosses have high HP).",
				reason2: "An okay PVP stall tank that has 10% damage mitigation when Shield Wall is on cooldown."
			}
		]
	},
	{
		hero4: "Cidd",
		hero4smallimg: ciddsmall,
		hero_details: [
			{
				hero4: "Cidd",
				hero4fullimg: ciddfull,
				reason1: "Great unit with a high damage multiplier skill, Hack, that can attack with elemental advantage on any unit as long as he has Speed Buff on him.",
				reason2: "Very beginner friendly for new players trying to get into the PVP side of Epic Seven. Righteous Thief Roozid and Cidd synergizes well and is usually the most common combo new players use in PVP."
			}
		]
	},
	{
		hero4: "Clarissa",
		hero4smallimg: clarissasmall,
		hero_details: [
			{
				hero4: "Clarissa",
				hero4fullimg: clarissafull,
				reason1: "Decent farmer although not as good as Vildred.",
				reason2: "With a couple molagora investment, she can be a decent secondary DPS as well as a defense breaker for Wyvern 11 farm."
			}
		]
	},
	{
		hero4: "Corvus",
		hero4smallimg: corvussmall,
		hero_details: [
			{
				hero4: "Corvus",
				hero4fullimg: corvusfull,
				reason1: "Strong Guild War unit that is capable of winning in a 1 v 3 scenario versus certain team compositions.",
				reason2: "Having no cooldown on Fury's Advent can make him nearly unkillable provided that he has enough Fighting Spirit to keep using it. This makes him a pretty decent PVP defense unit as there are times where Corvus alone can time a player out due to being unable to kill him."
			}
		]
	},
	{
		hero4: "Karin",
		hero4smallimg: karinsmall,
		hero_details: [
			{
				hero4: "Karin",
				hero4fullimg: karinfull,
				reason1: "Decent single target damage dealer for Wyvern 11 farming when enough gear is invested. If there is no gear invested on her, Karin is still quite good as she provides a rather consistent Defense Break debuff.",
				reason2: "She requires zero molagora investment to function when it comes to Wyvern 11 farming."
			}
		]
	},
	{
		hero4: "Schuri",
		hero4smallimg: schurismall,
		hero_details: [
			{
				hero4: "Schuri",
				hero4fullimg: schurifull,
				reason1: "Decent Combat Readiness pusher as long as he can crit the enemies. In PVE contents like Abyss, Schuri can cycle more turns for the entire team.",
				reason2: "He has a rather high speed imprint going upwards of 14 speed to the two back slots of the team composition. This is quite useful when it comes to giving the main Combat Readiness pusher the speed needed to go first at the start of PVP."
			}
		]
	},
	{
		hero3: "Montmorancy",
		hero3smallimg: montmorancysmall,
		hero_details: [
			{
				hero3: "Montmorancy",
				hero3fullimg: montmorancyfull,
				reason1: "Once you Specialty Change her into Angelic Montmorancy, she becomes the most useful unit in clearing hard PVE contents and especially in Guild Wars.",
				reason2: "She has high resistance stats and the ability to constantly dispel debuffs from all allies and healing them at the same time. If you include Rod of Amaryllis artifact ontop of that, your team will always be healthy and safe from most dangers."
			}
		]
	},
	{
		hero3: "Kluri",
		hero3smallimg: klurismall,
		hero_details: [
			{
				hero3: "Kluri",
				hero3fullimg: klurifull,
				reason1: "Kluri becomes quite decent after you Specialty Change her into Falconer Kluri. What makes her worth using is her third skill, Fluri, Attack!. It dispells all buffs on the target before applying two turn Defense Break and Provoke debuffs on the target.",
				reason2: "She is also quite inexpensive to gear in order to provide the utlities she offers. She can help beginners progress through the Abyss and the debuffs she offers are actually quite powerful in PVP such as Guild Wars."
			}
		]
	},
]


