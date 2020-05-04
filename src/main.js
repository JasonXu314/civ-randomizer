import $ from 'jquery';
import iconify from './iconify';

const civs = [];
const ignoreCivs = [];

$.getJSON('https://civ-randomizer-backend.herokuapp.com/').then((res) => {
	res.forEach((civ) => {
		$(`
			<li class = "civ">
				<img src = "${civ.icon}" alt = "${civ.name} icon">
				<div>
					<h3>${civ.name}</h3>
					<p class = "hidden">Disabled</p>
				</div>
			</li>
		`).click((evt) => {
			const thisCiv = evt.currentTarget.querySelector('h3').textContent;
			if (civs.includes(thisCiv)) {
				if (civs.length === 1) {
					if ($('div.alert').length === 0) {
						$(`
							<div class = "alert" style = "position: absolute; top: ${evt.pageY}px; left: ${evt.pageX}px">
								You must have at least 1 civ to randomize!
							</div>
						`).appendTo($('body'));
						setTimeout(() => {
							$('div.alert').remove();
						}, 2500);
					}
					return;
				}
				ignoreCivs.push(civs.splice(civs.indexOf(thisCiv), 1)[0]);
				$(evt.currentTarget).toggleClass('disabled');
				$(evt.currentTarget.querySelector('div p')).toggleClass('hidden');
			}
			else {
				civs.push(ignoreCivs.splice(ignoreCivs.indexOf(thisCiv), 1)[0]);
				$(evt.currentTarget).toggleClass('disabled');
				$(evt.currentTarget.querySelector('div p')).toggleClass('hidden');
			}
		}).appendTo($('ul#civ-list'));
		civs.push(civ.name);
	});
});

$('button#randomize-button').click(() => {
	const choice = civs[Math.floor(Math.random() * civs.length)];
	$.getJSON(`https://civ-randomizer-backend.herokuapp.com/?civ=${choice}`).then((civ) => {
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
			${civ.infrastructure.map((inf) => `<h3>${inf.name} ${inf.replaces === null ? (inf.district === null ? '(Unique Improvement)' : '(Unique Building)') : `(Replaces ${inf.replaces})`}</h3>\n<ul>${inf.effects.map((effect) => `<li>${iconify(effect)}</li>`).join('\n')}</ul>`).join('\n')}
			${civ.unit.map((unit) => `<h3>${unit.name} ${unit.replaces === null ? '(Unique Unit)' : `(Replaces ${unit.replaces})`}</h3>\n<ul>${unit.special.map((special) => `<li>${iconify(special)}</li>`).join('\n')}</ul>`).join('\n')}
		`).appendTo($('#chosen-civ'));
	});
});

window.allBut = (civ) => {
	$('li.civ').each((_, elem) => {
		if (elem.querySelector('div h3').textContent !== civ) {
			$(elem).click();
		}
	});
};