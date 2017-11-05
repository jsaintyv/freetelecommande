/**
 * Class de contrôle de la freebox.
 */

var config = require('../config/config');
var rp = require('request-promise');


module.exports = function () {
	function remoteControl(key) {
		return rp('http://hd1.freebox.fr/pub/remote_control?code=' + config.remotepasswd + '&key=' + key)
	}
	
	/* @see http://tutoriels.domotique-store.fr/content/51/90/fr/api-de-la-freebox-tv-_-player-v5-_-v6-via-requ%C3%AAtes-http.html */
	return {		
		power: function() {return remoteControl('power');},
		up: function() {return remoteControl('up');},
		down: function() {return remoteControl('down');},
		right: function() {return remoteControl('right');},
		left: function() {return remoteControl('left');},
		ok: function() {return remoteControl('ok');},
		play: function() {return remoteControl('play');},
		red: function() {return remoteControl('red');},
		home: function() {return remoteControl('home');},
		back: function() {return remoteControl('back');},
		soundUp: function() {return remoteControl('soundUp');},
		soundDown: function() {return remoteControl('soundDown');},
		execute: remoteControl
	};
}