/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const civs = [];\r\nconst ignoreCivs = [];\r\n\r\n// Yields\r\nconst science = 'https://vignette.wikia.nocookie.net/civilization/images/7/79/Civ6Science.png/';\r\nconst culture = 'https://vignette.wikia.nocookie.net/civilization/images/2/2a/Civ6Culture.png/';\r\nconst gold = 'https://vignette.wikia.nocookie.net/civilization/images/b/bc/Civ6Gold.png/';\r\nconst faith = 'https://vignette.wikia.nocookie.net/civilization/images/8/82/Civ6Faith.png/';\r\nconst production = 'https://vignette.wikia.nocookie.net/civilization/images/7/74/Civ6Production.png/';\r\nconst food = 'https://vignette.wikia.nocookie.net/civilization/images/6/65/Civ6Food.png/';\r\nconst housing = 'https://vignette.wikia.nocookie.net/civilization/images/a/ae/Housing6.png/';\r\nconst amenities = 'https://gamepedia.cursecdn.com/civ6_gamepedia_en/a/a8/Icon_Amenities.png?version=711dd4e8aa532c9db271a3840bff52fd';\r\nconst movement = 'https://vignette.wikia.nocookie.net/civilization/images/8/89/Civ6Movement.png/';\r\nconst tourism = 'https://vignette.wikia.nocookie.net/civilization/images/5/5b/Tourism6.png/';\r\nconst melee = 'https://vignette.wikia.nocookie.net/civilization/images/b/b6/Civ6StrengthIcon.png/';\r\nconst ranged = 'https://vignette.wikia.nocookie.net/civilization/images/d/da/Civ6RangedStrength.png/';\r\nconst bombard = 'https://vignette.wikia.nocookie.net/civilization/images/5/59/Bombard_Strength_%28Civ6%29.png/';\r\nconst antiair = 'https://vignette.wikia.nocookie.net/civilization/images/2/28/Anti-Air_Strength_%28Civ6%29.png/';\r\nconst religious = 'https://vignette.wikia.nocookie.net/civilization/images/2/22/ReligiousStrength6.png/';\r\nconst range = 'https://vignette.wikia.nocookie.net/civilization/images/9/9e/Civ6Range.png/';\r\nconst trade = 'https://vignette.wikia.nocookie.net/civilization/images/0/0f/TradeRoute6.png/';\r\nconst visibility = 'https://vignette.wikia.nocookie.net/civilization/images/c/ce/DiplomaticVisibility6.png/';\r\nconst tradePost = 'https://vignette.wikia.nocookie.net/civilization/images/7/72/Trading_Post_%28Civ6%29.png/';\r\nconst population = 'https://vignette.wikia.nocookie.net/civilization/images/f/f8/Citizen6.png/';\r\nconst relic = 'https://vignette.wikia.nocookie.net/civilization/images/c/c5/Relic6.png/';\r\nconst favor = 'https://vignette.wikia.nocookie.net/civilization/images/c/c4/Diplomatic_Favor_%28Civ6%29.png/';\r\nconst eureka = 'https://vignette.wikia.nocookie.net/civilization/images/5/52/Eureka6.png/';\r\nconst inspiration = 'https://vignette.wikia.nocookie.net/civilization/images/1/13/Inspiration6.png/';\r\nconst envoy = 'https://vignette.wikia.nocookie.net/civilization/images/2/24/Envoy6.png/';\r\nconst power = 'https://vignette.wikia.nocookie.net/civilization/images/5/59/Power_%28Civ6%29.png/';\r\nconst horses = 'https://vignette.wikia.nocookie.net/civilization/images/9/9b/Horses_%28Civ6%29.png/';\r\nconst iron = 'https://vignette.wikia.nocookie.net/civilization/images/7/78/Iron_%28Civ6%29.png/';\r\nconst niter = 'https://vignette.wikia.nocookie.net/civilization/images/3/3f/Niter_%28Civ6%29.png/';\r\nconst coal = 'https://vignette.wikia.nocookie.net/civilization/images/d/d8/Coal_%28Civ6%29.png/';\r\nconst oil = 'https://vignette.wikia.nocookie.net/civilization/images/d/de/Oil_%28Civ6%29.png/';\r\nconst aluminum = 'https://vignette.wikia.nocookie.net/civilization/images/0/06/Aluminum_%28Civ6%29.png/';\r\nconst uranium = 'https://vignette.wikia.nocookie.net/civilization/images/a/a5/Uranium_%28Civ6%29.png/';\r\n\r\n// Great People\r\nconst general = 'https://vignette.wikia.nocookie.net/civilization/images/f/fd/General6.png/';\r\nconst admiral = 'https://vignette.wikia.nocookie.net/civilization/images/1/1a/Admiral6.png/';\r\nconst engineer =  'https://vignette.wikia.nocookie.net/civilization/images/8/8b/Engineer6.png/';\r\nconst writer =  'https://vignette.wikia.nocookie.net/civilization/images/3/3f/Writer6.png/';\r\nconst musician =  'https://vignette.wikia.nocookie.net/civilization/images/0/00/Musician6.png/';\r\nconst scientist =  'https://vignette.wikia.nocookie.net/civilization/images/8/84/Scientist6.png/';\r\nconst prophet = 'https://vignette.wikia.nocookie.net/civilization/images/d/d3/Prophet6.png/';\r\nconst artist = 'https://vignette.wikia.nocookie.net/civilization/images/7/75/Artist6.png/';\r\nconst merchant = 'https://vignette.wikia.nocookie.net/civilization/images/4/45/Merchant6.png/';\r\n\r\n// Districts\r\nconst campus = 'https://vignette.wikia.nocookie.net/civilization/images/1/18/Campus_%28Civ6%29.png/';\r\nconst canal = 'https://vignette.wikia.nocookie.net/civilization/images/f/fd/Canal_%28Civ6%29.png/';\r\nconst dam = 'https://vignette.wikia.nocookie.net/civilization/images/5/50/Dam_%28Civ6%29.png/';\r\nconst holy = 'https://vignette.wikia.nocookie.net/civilization/images/a/a8/Holy_Site_%28Civ6%29.png/';\r\nconst theater = 'https://vignette.wikia.nocookie.net/civilization/images/4/44/Theater_Square_%28Civ6%29.png/';\r\nconst encampment = 'https://vignette.wikia.nocookie.net/civilization/images/2/24/Encampment_%28Civ6%29.png/';\r\nconst harbor = 'https://vignette.wikia.nocookie.net/civilization/images/d/df/Harbor_%28Civ6%29.png/';\r\nconst commercial = 'https://vignette.wikia.nocookie.net/civilization/images/f/fe/Commercial_Hub_%28Civ6%29.png/';\r\nconst industrial = 'https://vignette.wikia.nocookie.net/civilization/images/0/0b/Industrial_Zone_%28Civ6%29.png/';\r\nconst entertain = 'https://vignette.wikia.nocookie.net/civilization/images/c/cb/Entertainment_Complex_%28Civ6%29.png/';\r\nconst park = 'https://vignette.wikia.nocookie.net/civilization/images/2/2c/Water_Park_%28Civ6%29.png/';\r\nconst aqueduct = 'https://vignette.wikia.nocookie.net/civilization/images/f/f9/Aqueduct_%28Civ6%29.png/';\r\nconst neighborhood = 'https://vignette.wikia.nocookie.net/civilization/images/3/31/Neighborhood_%28Civ6%29.png/';\r\nconst aerodrome = 'https://vignette.wikia.nocookie.net/civilization/images/c/c7/Aerodrome_%28Civ6%29.png/';\r\nconst spaceport = 'https://vignette.wikia.nocookie.net/civilization/images/7/7d/Spaceport_%28Civ6%29.png/';\r\nconst plaza = 'https://vignette.wikia.nocookie.net/civilization/images/b/b3/Government_Plaza_%28Civ6%29.png/';\r\n\r\n\r\n$.getJSON('https://civ-randomizer-backend.herokuapp.com/').then((res) => {\r\n\tres.forEach((civ) => {\r\n\t\t$(`\r\n\t\t\t<li class = \"civ\">\r\n\t\t\t\t<img src = \"${civ.icon}\" alt = \"${civ.name} icon\">\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<h3>${civ.name}</h3>\r\n\t\t\t\t\t<p class = \"hidden\">Disabled</p>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t`).click((evt) => {\r\n\t\t\tconst thisCiv = evt.currentTarget.querySelector('h3').textContent;\r\n\t\t\tif (civs.includes(thisCiv)) {\r\n\t\t\t\tif (civs.length === 1) {\r\n\t\t\t\t\tif ($('div.alert').length === 0) {\r\n\t\t\t\t\t\t$(`\r\n\t\t\t\t\t\t\t<div class = \"alert\" style = \"position: absolute; top: ${evt.pageY}px; left: ${evt.pageX}px\">\r\n\t\t\t\t\t\t\t\tYou must have at least 1 civ to randomize!\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t`).appendTo($('body'));\r\n\t\t\t\t\t\tsetTimeout(() => {\r\n\t\t\t\t\t\t\t$('div.alert').remove();\r\n\t\t\t\t\t\t}, 2500);\r\n\t\t\t\t\t}\r\n\t\t\t\t\treturn;\r\n\t\t\t\t}\r\n\t\t\t\tignoreCivs.push(civs.splice(civs.indexOf(thisCiv), 1)[0]);\r\n\t\t\t\t$(evt.currentTarget).toggleClass('disabled');\r\n\t\t\t\t$(evt.currentTarget.querySelector('div p')).toggleClass('hidden');\r\n\t\t\t}\r\n\t\t\telse {\r\n\t\t\t\tcivs.push(ignoreCivs.splice(ignoreCivs.indexOf(thisCiv), 1)[0]);\r\n\t\t\t\t$(evt.currentTarget).toggleClass('disabled');\r\n\t\t\t\t$(evt.currentTarget.querySelector('div p')).toggleClass('hidden');\r\n\t\t\t}\r\n\t\t}).appendTo($('ul#civ-list'));\r\n\t\tcivs.push(civ.name);\r\n\t});\r\n});\r\n\r\n$('button#randomize-button').click(() => {\r\n\tconst choice = civs[Math.floor(Math.random() * civs.length)];\r\n\t$.getJSON(`https://civ-randomizer-backend.herokuapp.com/?civ=${choice}`).then((civ) => {\r\n\t\t$('#chosen-civ').children().remove();\r\n\t\tciv.leader = civ.leader[Math.floor(Math.random() * civ.leader.length)];\r\n\t\t$(`\r\n\t\t\t<div class = \"outer\">\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<h2>${civ.name}</h2>\r\n\t\t\t\t\t<img src = \"${civ.icon}\" alt = \"${civ.name} icon\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<h2>${civ.leader.name}</h2>\r\n\t\t\t\t\t<img src = \"${civ.leader.portrait}\" alt = \"${civ.leader.name}\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<h3>${civ.abilityName}</h3>\r\n\t\t\t<p>${iconify(civ.ability)}</p>\r\n\t\t\t<h3>${civ.leader.abilityName}</h3>\r\n\t\t\t<p>${iconify(civ.leader.ability)}</p>\r\n\t\t\t${civ.infrastructure.map((inf) => `<h3>${inf.name} ${inf.replaces === null ? (inf.district === null ? '(Unique Improvement)' : '(Unique Building)') : `(Replaces ${inf.replaces})`}</h3>\\n<ul>${inf.effects.map((effect) => `<li>${iconify(effect)}</li>`).join('\\n')}</ul>`).join('\\n')}\r\n\t\t\t${civ.unit.map((unit) => `<h3>${unit.name} ${unit.replaces === null ? '(Unique Unit)' : `(Replaces ${unit.replaces})`}</h3>\\n<ul>${unit.special.map((special) => `<li>${iconify(special)}</li>`).join('\\n')}</ul>`).join('\\n')}\r\n\t\t`).appendTo($('#chosen-civ'));\r\n\t});\r\n});\r\n\r\nfunction iconify(str) {\r\n\tlet newStr = str;\r\n\tnewStr = newStr.replace('Science', `<img src = \"${science}\" alt = \"Science\">`);\r\n\tnewStr = newStr.replace(/Culture/g, (substring, args) => {\r\n\t\treturn newStr.slice(args, args + 12) === 'Culture Bomb' ? substring : `<img src = \"${culture}\" alt = \"Culture\">`;\r\n\t});\r\n\tnewStr = newStr.replace('Gold', (substring, args) => {\r\n\t\treturn newStr.slice(args, args + 10) === 'Golden Age' ? substring : `<img src = \"${gold}\" alt = \"Gold\">`;\r\n\t});\r\n\tnewStr = newStr.replace(/Faith/g, `<img src = \"${faith}\" alt = \"Faith\">`);\r\n\tnewStr = newStr.replace(/Production/g, (substring, args) => {\r\n\t\treturn newStr.slice(args - 5, args + 10) === 'Mass Production' ? substring : `<img src = \"${production}\" alt = \"Production\">`;\r\n\t});\r\n\tnewStr = newStr.replace('Food', `<img src = \"${food}\" alt = \"Food\">`);\r\n\tnewStr = newStr.replace(/Great General Points?/g, `<img src = \"${general}\" alt = \"Great General Point\">`);\r\n\tnewStr = newStr.replace(/Great Admiral Points?/g, `<img src = \"${admiral}\" alt = \"Great Admiral Point\">`);\r\n\tnewStr = newStr.replace(/Great Engineer Points?/g, `<img src = \"${engineer}\" alt = \"Great Engineer Point\">`);\r\n\tnewStr = newStr.replace(/Great Writer Points?/g, `<img src = \"${writer}\" alt = \"Great Writer Point\">`);\r\n\tnewStr = newStr.replace(/Great Musician Points?/g, `<img src = \"${musician}\" alt = \"Great Musician Point\">`);\r\n\tnewStr = newStr.replace(/Great Scientist Points?/g, `<img src = \"${scientist}\" alt = \"Great Scientist Point\">`);\r\n\tnewStr = newStr.replace(/Great Prophet Points?/g, `<img src = \"${prophet}\" alt = \"Great Prophet Point\">`);\r\n\tnewStr = newStr.replace(/Great Artist Points?/g, `<img src = \"${artist}\" alt = \"Great Artist Point\">`);\r\n\tnewStr = newStr.replace(/Great Merchant Points?/g, `<img src = \"${merchant}\" alt = \"Great Merchant Point\">`);\r\n\tnewStr = newStr.replace('Housing', `<img src = \"${housing}\" alt = \"Housing\">`);\r\n\tnewStr = newStr.replace(/(Amenities|Amenity)/g, `<img src = \"${amenities}\" alt = \"Amenities\">`);\r\n\tnewStr = newStr.replace('Movement', `<img src = \"${movement}\" alt = \"Movement\">`);\r\n\tnewStr = newStr.replace('Tourism', `<img src = \"${tourism}\" alt = \"Tourism\">`);\r\n\tnewStr = newStr.replace(/Combat Strength/g, `<img src = \"${melee}\" alt = \"Combat Strength\">`);\r\n\tnewStr = newStr.replace(/Ranged Strength/g, `<img src = \"${ranged}\" alt = \"Ranged Strength\">`);\r\n\tnewStr = newStr.replace('Bombard Strength', `<img src = \"${bombard}\" alt = \"Bombard Strength\">`);\r\n\tnewStr = newStr.replace('Anti-Air Strength', `<img src = \"${antiair}\" alt = \"Anti-Air Strength\">`);\r\n\tnewStr = newStr.replace('Religious Strength', `<img src = \"${religious}\" alt = \"Religious Strength\">`);\r\n\tnewStr = newStr.replace('Range', (substring, args) => {\r\n\t\treturn newStr.slice(args, args + 6) === 'Ranged' ? substring : `<img src = \"${range}\" alt = \"Range\">`;\r\n\t});\r\n\tnewStr = newStr.replace(/Traders?/g, `<img src = \"${trade}\" alt = \"Trader\">`);\r\n\tnewStr = newStr.replace(/Trade Routes?/g, `<img src = \"${trade}\" alt = \"Trade Route\">`);\r\n\tnewStr = newStr.replace('Diplomatic Visibility', `<img src = \"${visibility}\" alt = \"Diplomatic Visibility\">`);\r\n\tnewStr = newStr.replace('Trading Post', `<img src = \"${tradePost}\" alt = \"Trading Post\">`);\r\n\tnewStr = newStr.replace('Population', `<img src = \"${population}\" alt = \"Population\">`);\r\n\tnewStr = newStr.replace('Relic', `<img src = \"${relic}\" alt = \"Relic\">`);\r\n\tnewStr = newStr.replace('Diplomatic Favor', `<img src = \"${favor}\" alt = \"Diplomatic Favor\">`);\r\n\tnewStr = newStr.replace(/Eurekas?/g, `<img src = \"${eureka}\" alt = \"Eureka\">`);\r\n\tnewStr = newStr.replace(/Inspirations?/g, `<img src = \"${inspiration}\" alt = \"Inspiration\">`);\r\n\tnewStr = newStr.replace(/Envoys?/g, `<img src = \"${envoy}\" alt = \"Envoy\">`);\r\n\tnewStr = newStr.replace('Power', (substring, args) => {\r\n\t\treturn newStr.slice(args, args + 7) === 'Powered' ? substring : `<img src = \"${power}\" alt = \"Power\">`;\r\n\t});\r\n\tnewStr = newStr.replace('Horses\t', `<img src = \"${horses}\" alt = \"Horses\">`);\r\n\tnewStr = newStr.replace('Iron', `<img src = \"${iron}\" alt = \"Iron\">`);\r\n\tnewStr = newStr.replace('Niter', `<img src = \"${niter}\" alt = \"Niter\">`);\r\n\tnewStr = newStr.replace('Coal', `<img src = \"${coal}\" alt = \"Coal\">`);\r\n\tnewStr = newStr.replace('Oil', `<img src = \"${oil}\" alt = \"Oil\">`);\r\n\tnewStr = newStr.replace('Aluminum', `<img src = \"${aluminum}\" alt = \"Aluminum\">`);\r\n\tnewStr = newStr.replace('Uranium', `<img src = \"${uranium}\" alt = \"Uranium\">`);\r\n\tnewStr = newStr.replace(/Campus(es)?/g, `<img src = \"${campus}\" alt = \"Campus\">`);\r\n\tnewStr = newStr.replace(/Canals?/g, `<img src = \"${canal}\" alt = \"Canal\">`);\r\n\tnewStr = newStr.replace(/Dams?/g, `<img src = \"${dam}\" alt = \"Dam\">`);\r\n\tnewStr = newStr.replace(/Holy Sites?/g, `<img src = \"${holy}\" alt = \"Holy Site\">`);\r\n\tnewStr = newStr.replace(/Theater Squares?/g, `<img src = \"${theater}\" alt = \"Theater Square\">`);\r\n\tnewStr = newStr.replace(/Encampments?/g, `<img src = \"${encampment}\" alt = \"Encampment\">`);\r\n\tnewStr = newStr.replace(/Harbors?/g, `<img src = \"${harbor}\" alt = \"Harbor\">`);\r\n\tnewStr = newStr.replace(/Commercial Hubs?/g, `<img src = \"${commercial}\" alt = \"Commercial Hub\">`);\r\n\tnewStr = newStr.replace(/Industrial Zones?/g, `<img src = \"${industrial}\" alt = \"Industrial\">`);\r\n\tnewStr = newStr.replace(/Entertainment Complex(es)?/g, `<img src = \"${entertain}\" alt = \"Entertainment Complex\">`);\r\n\tnewStr = newStr.replace(/Water Parks?/g, `<img src = \"${park}\" alt = \"Water Park\">`);\r\n\tnewStr = newStr.replace(/Aqueducts?/g, `<img src = \"${aqueduct}\" alt = \"Aqueduct\">`);\r\n\tnewStr = newStr.replace(/Neighborhoods?/g, `<img src = \"${neighborhood}\" alt = \"Neighborhood\">`);\r\n\tnewStr = newStr.replace(/Aerodromes?/g, `<img src = \"${aerodrome}\" alt = \"Aerodrome\">`);\r\n\tnewStr = newStr.replace(/Spaceports?/g, `<img src = \"${spaceport}\" alt = \"Spaceport\">`);\r\n\tnewStr = newStr.replace(/Government Plazas?/g, `<img src = \"${plaza}\" alt = \"Government Plaza\">`);\r\n\treturn newStr;\r\n}\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });