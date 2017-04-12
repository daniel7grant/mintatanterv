import Vue from 'vue'
import BmeContainer from './bme-container.vue'

new Vue({
	el : '.subjects',
	components : {
		BmeContainer
	},
	data : {
		filter : '',
		colormode : 0
	}
});

new Vue({
	el: '.terms',
	components :{
		BmeContainer
	}
});
