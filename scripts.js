const civs = [];

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
		civ.leader = civ.leader[Math.floor(Math.random() * civ.leader.length)];
		const civCard = $(`
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
			<p>${civ.ability}</p>
			${civ.infrastructure.map((inf) => `<h3>${inf.name}</h3>\n<ul>${inf.effects.map((effect) => `<li>${effect}</li>`).join('\n')}</ul>`).join('\n')}
			${civ.unit.map((unit) => `<h3>${unit.name}</h3>\n<ul>${unit.special.map((special) => `<li>${special}</li>`).join('\n')}</ul>`).join('\n')}
		`);
		$('#chosen-civ').children().remove();
		$('#chosen-civ').append(civCard);
	});
});