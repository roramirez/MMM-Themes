/* global Module */

/* Magic Mirror
 * Module: MMM-Themes
 *
 * By Rodrigo Ramírez Norambuena
 * MIT Licensed.
 */

Module.register("MMM-Themes", {

	defaults: {
		count: 10,
		size: 1.00,
		theme: "snow",
	},

	requiresVersion: "2.1.0", // Required version of MagicMirror

	// Availables themes
	themes: {
		valentine: {
			wrapper: "valentine-wrapper",
			items: 14,
			iconClassName: "valentine-heart",
			jiggleClassName: "heart"
		},
		snow: {
			wrapper: "snow-wrapper",
			items: 2,
			iconClassName: "snow-flake",
			jiggleClassName: "flake"
		},
		saint_patrick: {
			wrapper: "patrick-wrapper",
			items: 14,
			iconClassName: "saint-patrick",
			jiggleClassName: "patrick"
		}
	},

	getStyles: function() {
		return [this.data.path + "/themes/" + this.getThemeName() + "/style.css"];
	},

	getThemeName: function() {
		return this.config.theme.toLowerCase();
	},

	getTheme: function() {
		return this.themes[this.getThemeName()];
	},

	getDom: function() {

		var theme = this.getTheme();
		var wrapper = document.createElement("div")

		wrapper.className = theme.wrapper;

		var elementIcon, jiggle, size, rotation;

		for(var i = 0; i < this.config.count; i++) {
			elementIcon = document.createElement("div");
			elementIcon.className = theme.iconClassName;

			jiggle = document.createElement("div");
			jiggle.style.animationDelay = (Math.random() * 4) + "s";
			jiggle.style.animationDuration = ((Math.random() * 30) + 30) + "s";
			jiggle.className = theme.jiggleClassName + (Math.round(Math.random() * theme.items) + 1);

			size = (Math.random() * 0.75) + 0.25 + this.config.size;
			rotation = (Math.floor(Math.random() * 81) - 40);
			jiggle.style.transform = "scale(" + size + ", " + size + ") rotate(" + rotation + "deg)";
			jiggle.style.opacity = size - this.config.size;

			elementIcon.appendChild(jiggle);
			elementIcon.style.left = ((Math.random() * 100) - 10) + "%";
			elementIcon.style.animationDelay = (Math.random() * 100) + "s";
			elementIcon.style.animationDuration = 100 - (Math.random() * 50 * (size - this.config.size)) + "s";

			wrapper.appendChild(elementIcon);

		}
		return wrapper;
	},

});
