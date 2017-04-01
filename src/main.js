import Vue from 'vue'
import App from './App.vue'
import BmeContainer from './bme-container.vue'


new Vue({
	el: '#app',
	render: h => h(BmeContainer)
})
