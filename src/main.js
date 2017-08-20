import Vue from 'vue'
import BmeContainer from './BmeContainer.vue'
import BmeDetails from './BmeDetails.vue'

new Vue({
	el: '.wrapper',
	components: {
		'bme-container' : BmeContainer,
		'bme-details' : BmeDetails
	},
	data: {
		filter: '',
		colormode: 0,
		detailedSubject: undefined,
		detailedHover: undefined
	},
	methods: {
		detailed: function (ev) {
			if (ev.clicked) {
				this.detailedSubject = ev.subject;
			}
			else {
				this.detailedHover = ev.subject;
			}
		}
	}
});
