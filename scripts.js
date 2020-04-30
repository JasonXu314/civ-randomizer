const civs = [];
const science = 'https://vignette.wikia.nocookie.net/civilization/images/7/79/Civ6Science.png/';
const culture = 'https://vignette.wikia.nocookie.net/civilization/images/2/2a/Civ6Culture.png/';
const gold = 'https://vignette.wikia.nocookie.net/civilization/images/b/bc/Civ6Gold.png/';
const faith = 'https://vignette.wikia.nocookie.net/civilization/images/8/82/Civ6Faith.png/';
const production = 'https://vignette.wikia.nocookie.net/civilization/images/7/74/Civ6Production.png/';
const food = 'https://vignette.wikia.nocookie.net/civilization/images/6/65/Civ6Food.png/';
const housing = 'https://vignette.wikia.nocookie.net/civilization/images/a/ae/Housing6.png/';
const amenities = 'https://gamepedia.cursecdn.com/civ6_gamepedia_en/a/a8/Icon_Amenities.png?version=711dd4e8aa532c9db271a3840bff52fd';
const movement = 'https://vignette.wikia.nocookie.net/civilization/images/8/89/Civ6Movement.png/';
const tourism = 'https://vignette.wikia.nocookie.net/civilization/images/5/5b/Tourism6.png/';
const melee = 'https://vignette.wikia.nocookie.net/civilization/images/b/b6/Civ6StrengthIcon.png/';
const ranged = 'https://vignette.wikia.nocookie.net/civilization/images/d/da/Civ6RangedStrength.png/';
const bombard = 'https://vignette.wikia.nocookie.net/civilization/images/5/59/Bombard_Strength_%28Civ6%29.png/';
const antiair = 'https://vignette.wikia.nocookie.net/civilization/images/2/28/Anti-Air_Strength_%28Civ6%29.png/';
const religious = 'https://vignette.wikia.nocookie.net/civilization/images/2/22/ReligiousStrength6.png/';
const range = 'https://vignette.wikia.nocookie.net/civilization/images/9/9e/Civ6Range.png/';
const trade = 'https://vignette.wikia.nocookie.net/civilization/images/0/0f/TradeRoute6.png/revision/latest/scale-to-width-down/18?cb=20200427172157';
const visibility = 'https://vignette.wikia.nocookie.net/civilization/images/c/ce/DiplomaticVisibility6.png/revision/latest?cb=20161230001051';
const tradePost = 'https://vignette.wikia.nocookie.net/civilization/images/7/72/Trading_Post_%28Civ6%29.png/revision/latest/scale-to-width-down/18?cb=20200429095829';
const population = 'https://vignette.wikia.nocookie.net/civilization/images/f/f8/Citizen6.png/revision/latest/scale-to-width-down/18?cb=20200427170416';
const relic = 'https://vignette.wikia.nocookie.net/civilization/images/c/c5/Relic6.png/revision/latest/scale-to-width-down/18?cb=20200429101740';
const favor = 'https://vignette.wikia.nocookie.net/civilization/images/c/c4/Diplomatic_Favor_%28Civ6%29.png/revision/latest/scale-to-width-down/16?cb=20190217195551';
const eureka = 'https://vignette.wikia.nocookie.net/civilization/images/5/52/Eureka6.png/revision/latest?cb=20170406021031';
const inspiration = 'https://vignette.wikia.nocookie.net/civilization/images/1/13/Inspiration6.png/revision/latest?cb=20170406020723';
const envoy = 'https://vignette.wikia.nocookie.net/civilization/images/2/24/Envoy6.png/revision/latest?cb=20161107201124';
const power = 'https://vignette.wikia.nocookie.net/civilization/images/5/59/Power_%28Civ6%29.png/revision/latest/scale-to-width-down/16?cb=20190216112249';
const horses = 'https://vignette.wikia.nocookie.net/civilization/images/9/9b/Horses_%28Civ6%29.png/revision/latest/scale-to-width-down/20?cb=20180504043124';
const iron = 'https://vignette.wikia.nocookie.net/civilization/images/7/78/Iron_%28Civ6%29.png/revision/latest/scale-to-width-down/20?cb=20180504043126';
const niter = 'https://vignette.wikia.nocookie.net/civilization/images/3/3f/Niter_%28Civ6%29.png/revision/latest/scale-to-width-down/20?cb=20180504043128';
const coal = 'https://vignette.wikia.nocookie.net/civilization/images/d/d8/Coal_%28Civ6%29.png/revision/latest/scale-to-width-down/20?cb=20180504043130';
const oil = 'https://vignette.wikia.nocookie.net/civilization/images/d/de/Oil_%28Civ6%29.png/revision/latest/scale-to-width-down/20?cb=20180504043132';
const aluminum = 'https://vignette.wikia.nocookie.net/civilization/images/0/06/Aluminum_%28Civ6%29.png/revision/latest/scale-to-width-down/20?cb=20180504041156';
const uranium = 'https://vignette.wikia.nocookie.net/civilization/images/a/a5/Uranium_%28Civ6%29.png/revision/latest/scale-to-width-down/20?cb=20180504043135';

// Great People
const general = 'https://vignette.wikia.nocookie.net/civilization/images/f/fd/General6.png/';
const admiral = 'https://vignette.wikia.nocookie.net/civilization/images/1/1a/Admiral6.png/';
const engineer =  'https://vignette.wikia.nocookie.net/civilization/images/8/8b/Engineer6.png/';
const writer =  'https://vignette.wikia.nocookie.net/civilization/images/3/3f/Writer6.png/';
const musician =  'https://vignette.wikia.nocookie.net/civilization/images/0/00/Musician6.png/';
const scientist =  'https://vignette.wikia.nocookie.net/civilization/images/8/84/Scientist6.png/';
const prophet = 'https://vignette.wikia.nocookie.net/civilization/images/d/d3/Prophet6.png/';
const artist = 'https://vignette.wikia.nocookie.net/civilization/images/7/75/Artist6.png/';
const merchant = 'https://vignette.wikia.nocookie.net/civilization/images/4/45/Merchant6.png/';

// Districts
const campus = 'https://vignette.wikia.nocookie.net/civilization/images/1/18/Campus_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20190309225632';
const canal = 'https://vignette.wikia.nocookie.net/civilization/images/f/fd/Canal_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20190215175617';
const dam = 'https://vignette.wikia.nocookie.net/civilization/images/5/50/Dam_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20190215175430';
const holy = 'https://vignette.wikia.nocookie.net/civilization/images/a/a8/Holy_Site_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20180219222235';
const theater = 'https://vignette.wikia.nocookie.net/civilization/images/4/44/Theater_Square_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20180219222505';
const encampment = 'https://vignette.wikia.nocookie.net/civilization/images/2/24/Encampment_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20161028070041';
const harbor = 'https://vignette.wikia.nocookie.net/civilization/images/d/df/Harbor_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20180220014220';
const commercial = 'https://vignette.wikia.nocookie.net/civilization/images/f/fe/Commercial_Hub_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20180220014320';
const industrial = 'https://vignette.wikia.nocookie.net/civilization/images/0/0b/Industrial_Zone_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20180220014408';
const entertain = 'https://vignette.wikia.nocookie.net/civilization/images/c/cb/Entertainment_Complex_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20161110163714';
const park = 'https://vignette.wikia.nocookie.net/civilization/images/2/2c/Water_Park_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20180415213203';
const aqueduct = 'https://vignette.wikia.nocookie.net/civilization/images/f/f9/Aqueduct_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20161110163754';
const neighborhood = 'https://vignette.wikia.nocookie.net/civilization/images/3/31/Neighborhood_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20180220014453';
const aerodrome = 'https://vignette.wikia.nocookie.net/civilization/images/c/c7/Aerodrome_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20190622092811';
const spaceport = 'https://vignette.wikia.nocookie.net/civilization/images/7/7d/Spaceport_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20161110163918';
const plaza = 'https://vignette.wikia.nocookie.net/civilization/images/b/b3/Government_Plaza_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20180415212925';


$.getJSON('https://civ-randomizer-backend.herokuapp.com/').then((res) => {
	res.forEach((civ) => {
		$(`
			<li class = "civ">
				<img src = "${civ.icon}" alt = "${civ.name} icon">
				<h3>${civ.name}</h3>
			</li>
		`).click((evt) => {
			console.log(evt.currentTarget.querySelector('h3').textContent);
		}).appendTo($('ul#civ-list'));
		civs.push(civ.name);
	});
});

$('button#randomize-button').click(() => {
	const choice = Math.floor(Math.random() * civs.length);
	$.getJSON(`https://civ-randomizer-backend.herokuapp.com/?civ=${civs[choice]}`).then((civ) => {
		$('#chosen-civ').children().remove();
		civ.leader = civ.leader[Math.floor(Math.random() * civ.leader.length)];
		$(`
			<div class = "outer">
				<div>
					<h2>${civ.name}</h2>
					<img src = "${civ.icon}" alt = "${civ.name} icon">
				</div>
				<div>
					<h2>${civ.leader.name}</h2>
					<img src = "${civ.leader.portrait}" alt = "${civ.leader.name}">
				</div>
			</div>
			<h3>${civ.abilityName}</h3>
			<p>${iconify(civ.ability)}</p>
			<h3>${civ.leader.abilityName}</h3>
			<p>${iconify(civ.leader.ability)}</p>
			${civ.infrastructure.map((inf) => `<h3>${inf.name}</h3>\n<ul>${inf.effects.map((effect) => `<li>${iconify(effect)}</li>`).join('\n')}</ul>`).join('\n')}
			${civ.unit.map((unit) => `<h3>${unit.name}</h3>\n<ul>${unit.special.map((special) => `<li>${iconify(special)}</li>`).join('\n')}</ul>`).join('\n')}
		`).appendTo($('#chosen-civ'));
	});
});

function iconify(str) {
	let newStr = str;
	newStr = newStr.replace('Science', `<img src = "${science}" alt = "Science">`);
	newStr = newStr.replace('Culture', (substring, args) => {
		return newStr.slice(args, args + 12) === 'Culture Bomb' ? substring : `<img src = "${culture}" alt = "Culture">`;
	});
	newStr = newStr.replace('Gold', (substring, args) => {
		return newStr.slice(args, args + 10) === 'Golden Age' ? substring : `<img src = "${gold}" alt = "Gold">`;
	});
	newStr = newStr.replace('Faith', `<img src = "${faith}" alt = "Faith">`);
	newStr = newStr.replace('Production', `<img src = "${production}" alt = "Production">`);
	newStr = newStr.replace('Food', `<img src = "${food}" alt = "Food">`);
	newStr = newStr.replace(/Great General Points?/g, `<img src = "${general}" alt = "Great General Point">`);
	newStr = newStr.replace(/Great Admiral Points?/g, `<img src = "${admiral}" alt = "Great Admiral Point">`);
	newStr = newStr.replace(/Great Engineer Points?/g, `<img src = "${engineer}" alt = "Great Engineer Point">`);
	newStr = newStr.replace(/Great Writer Points?/g, `<img src = "${writer}" alt = "Great Writer Point">`);
	newStr = newStr.replace(/Great Musician Points?/g, `<img src = "${musician}" alt = "Great Musician Point">`);
	newStr = newStr.replace(/Great Scientist Points?/g, `<img src = "${scientist}" alt = "Great Scientist Point">`);
	newStr = newStr.replace(/Great Prophet Points?/g, `<img src = "${prophet}" alt = "Great Prophet Point">`);
	newStr = newStr.replace(/Great Artist Points?/g, `<img src = "${artist}" alt = "Great Artist Point">`);
	newStr = newStr.replace(/Great Merchant Points?/g, `<img src = "${merchant}" alt = "Great Merchant Point">`);
	newStr = newStr.replace('Housing', `<img src = "${housing}" alt = "Housing">`);
	newStr = newStr.replace(/(Amenities|Amenity)/g, `<img src = "${amenities}" alt = "Amenities">`);
	newStr = newStr.replace('Movement', `<img src = "${movement}" alt = "Movement">`);
	newStr = newStr.replace('Tourism', `<img src = "${tourism}" alt = "Tourism">`);
	newStr = newStr.replace('Combat Strength', `<img src = "${melee}" alt = "Combat Strength">`);
	newStr = newStr.replace(/Ranged Strength/g, `<img src = "${ranged}" alt = "Ranged Strength">`);
	newStr = newStr.replace('Bombard Strength', `<img src = "${bombard}" alt = "Bombard Strength">`);
	newStr = newStr.replace('Anti-Air Strength', `<img src = "${antiair}" alt = "Anti-Air Strength">`);
	newStr = newStr.replace('Religious Strength', `<img src = "${religious}" alt = "Religious Strength">`);
	newStr = newStr.replace('Range', (substring, args) => {
		return newStr.slice(args, args + 6) === 'Ranged' ? substring : `<img src = "${range}" alt = "Range">`;
	});
	newStr = newStr.replace(/Traders?/g, `<img src = "${trade}" alt = "Trader">`);
	newStr = newStr.replace(/Trade Routes?/g, `<img src = "${trade}" alt = "Trade Route">`);
	newStr = newStr.replace('Diplomatic Visibility', `<img src = "${visibility}" alt = "Diplomatic Visibility">`);
	newStr = newStr.replace('Trading Post', `<img src = "${tradePost}" alt = "Trading Post">`);
	newStr = newStr.replace('Population', `<img src = "${population}" alt = "Population">`);
	newStr = newStr.replace('Relic', `<img src = "${relic}" alt = "Relic">`);
	newStr = newStr.replace('Diplomatic Favor', `<img src = "${favor}" alt = "Diplomatic Favor">`);
	newStr = newStr.replace(/Eurekas?/g, `<img src = "${eureka}" alt = "Eureka">`);
	newStr = newStr.replace(/Inspirations?/g, `<img src = "${inspiration}" alt = "Inspiration">`);
	newStr = newStr.replace('Envoy', `<img src = "${envoy}" alt = "Envoy">`);
	newStr = newStr.replace('Power', `<img src = "${power}" alt = "Power">`);
	newStr = newStr.replace('Horses', `<img src = "${horses}" alt = "Horses">`);
	newStr = newStr.replace('Iron', `<img src = "${iron}" alt = "Iron">`);
	newStr = newStr.replace('Niter', `<img src = "${niter}" alt = "Niter">`);
	newStr = newStr.replace('Coal', `<img src = "${coal}" alt = "Coal">`);
	newStr = newStr.replace('Oil', `<img src = "${oil}" alt = "Oil">`);
	newStr = newStr.replace('Aluminum', `<img src = "${aluminum}" alt = "Aluminum">`);
	newStr = newStr.replace('Uranium', `<img src = "${uranium}" alt = "Uranium">`);
	newStr = newStr.replace('Campus', `<img src = "${campus}" alt = "Campus">`);
	newStr = newStr.replace(/Canals?/, `<img src = "${canal}" alt = "Canal">`);
	newStr = newStr.replace('Dam', `<img src = "${dam}" alt = "Dam">`);
	newStr = newStr.replace('Holy Site', `<img src = "${holy}" alt = "Holy Site">`);
	newStr = newStr.replace('Theater Square', `<img src = "${theater}" alt = "Theater Square">`);
	newStr = newStr.replace('Encampment', `<img src = "${encampment}" alt = "Encampment">`);
	newStr = newStr.replace('Harbor', `<img src = "${harbor}" alt = "Harbor">`);
	newStr = newStr.replace('Commerical Hub', `<img src = "${commercial}" alt = "Commercial Hub">`);
	newStr = newStr.replace('Industrial Zone', `<img src = "${industrial}" alt = "Industrial">`);
	newStr = newStr.replace(/Entertainment Complex(es)?/g, `<img src = "${entertain}" alt = "Entertainment Complex">`);
	newStr = newStr.replace('Water Park', `<img src = "${park}" alt = "Water Park">`);
	newStr = newStr.replace('Aqueduct', `<img src = "${aqueduct}" alt = "Aqueduct">`);
	newStr = newStr.replace('Neighborhood', `<img src = "${neighborhood}" alt = "Neighborhood">`);
	newStr = newStr.replace('Aerodrome', `<img src = "${aerodrome}" alt = "Aerodrome">`);
	newStr = newStr.replace('Spaceport', `<img src = "${spaceport}" alt = "Spaceport">`);
	newStr = newStr.replace('Government Plaza', `<img src = "${plaza}" alt = "Government Plaza">`);
	return newStr;
}