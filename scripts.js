const civs = [];

$.getJSON('https://baconipsum.com/api/?type=meat-and-filler&paras=5').then((res) => {
	res.forEach((description) => {
		$(`
			<li class = "civ">
				<h3>${description.split(' ')[0]}</h3>
				<img src = "https://vignette.wikia.nocookie.net/civilization/images/7/70/Teddy_Roosevelt_%28Civ6%29.png/" alt = "img here">
				<p>${description.split(' ').slice(1).join(' ')}</p>
			</li>
		`).click((evt) => {
			console.log(evt.currentTarget.querySelector('h3').textContent);
		}).appendTo($('ul#civ-list'));
		civs.push(description.split(' ')[0]);
	});
});

$('button#randomize-button').click(() => {
	const choice = Math.floor(Math.random() * civs.length);
	$('div#chosen-civ h2').text(civs[choice]);
});