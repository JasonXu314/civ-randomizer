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
	$.getJSON('https://civ-randomizer-backend.herokuapp.com/').then((res) => {
		// V WIP V \\
		$('div#chosen-civ h2').text(civs[choice]);
		$('div#chosen-civ img').append();
	});
});