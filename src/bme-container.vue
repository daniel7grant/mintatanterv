<template>
	<div v-bind:class="{ 'bme-container' : true, 'term' : term }"
		 v-on:dragover="contenter($event)" v-on:dragleave="contleave($event)" v-on:drop="contdrop($event)">
		<bme-subject v-for="(subj, index) in subjects"
					 v-bind:key="subj"
					 v-bind:subject="subj"
					 v-on:subjdrag="dragsubj($event)">

		</bme-subject>
	</div>
</template>

<script>
	import bmeSubject from './bme-subject.vue'
	import subjects from './subjects.js'

	export default {
		name: 'bme-container',
		props: ['term'],
		components: {bmeSubject},
		data: function () {
			if (this.term == 1) {
				return {
					subjects: {
						"BMEGEFOAMA1": {
							"code": "BMEGEFOAMA1",
							"name": "Aktuátortechnika",
							"short": "Aktuátortechnika",
							"exam": "1",
							"credit": "3",
							"term": "6",
							"crossterm": "0"
						}
					}
				};
			}
			if (this.term) return {subjects: {}};
			else return subjects;
		},
		methods: {
			dragsubj: function (ev) {
				//this.subjects[ev.code] = undefined;
			},
			contenter: function (ev) {
				ev.target.classList.add('isdrop');
				ev.preventDefault();
			},
			contleave: function (ev) {
				ev.target.classList.remove('isdrop');
				ev.preventDefault();
			},
			contdrop: function (ev) {
				ev.target.classList.remove('isdrop');
				console.log('out');
				let subject = JSON.parse(ev.dataTransfer.getData("subject"));
				console.log(subject);
				console.log(subject.code);
				this.subjects[subject.code] = subject;
				console.log(this.subjects);
				ev.dataTransfer.clearData();
				console.log(this.subjects);
				ev.preventDefault();
			}
		}
	}
</script>

<style scoped>
	.bme-container {
		margin: 5px 10px;
		padding: 10px;
		border: 1px solid #bbbbbb;
		border-radius: 5px;
	}

	.bme-container.term {
		min-height: 80px;
	}

	.bme-container.isdrop {
		background-color: red;
	}
</style>