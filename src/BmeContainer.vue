<template>
	<div v-bind:class="{ 'bme-container' : true, 'term' : term, 'isdrop' : drophere }"
		 v-on:dragenter="dragenter($event)"
		 v-on:dragover="dragover($event)"
		 v-on:dragleave="dragleave($event)"
		 v-on:drop="drop($event)">
		<div class="subject-title-aside">
			<slot></slot>
		</div>
		<div class="subject-credits-aside" v-if="term">{{creditsum}}</div>
		<bme-subject v-for="(subj, index) in subjects"
					 v-bind:key="subj.code"
					 v-bind:subject="subj"
					 v-bind:detailed-subj="detailedSubject"
					 v-show="filtered(subj)"
					 v-on:pass="passed()"
					 v-on:remove="remove($event)"
					 v-on:detailed="$emit('detailed', $event)">
		</bme-subject>
	</div>
</template>

<script>
	import BmeSubject from './BmeSubject.vue'
	import {getdata, setdata} from './accessdata.js'

	export default {
		name: 'bme-container',
		props: ['term', 'filter', 'colormode', 'detailed-subject', 'detailed-hover'],
		components: {BmeSubject},
		data: function () {
			return {
				subjects: getdata(this.term),
				drophere: false,
				cancelRemove: false
			};
		},
		methods: {
			filtered: function (subject) {
				if (this.filter) {
					return (subject.short.toLowerCase().indexOf(this.filter.toLowerCase()) > -1);
				}
				return true;
			},
			dragenter: function (ev) {
				this.drophere = true;
				ev.preventDefault();
			},
			dragover: function (ev) {
				if (this.drophere) {
					ev.dataTransfer.dropEffect = "move";
					ev.preventDefault();
				}
			},
			dragleave: function (ev) {
				this.drophere = false;
				ev.preventDefault();
			},
			drop: function (ev) {
				this.drophere = false;
				var subj = JSON.parse(ev.dataTransfer.getData("text"));
				if (this.subjects[subj.code]) this.cancelRemove = true;
				this.$set(this.subjects, subj.code, subj);
				setdata(this.term || false, this.subjects);
			},
			remove: function (code) {
				if (this.cancelRemove) return this.cancelRemove = false;
				for (var i in this.subjects) {
					if (this.subjects[i].code == code) {
						this.$delete(this.subjects, i);
						setdata(this.term || false, this.subjects);
					}
				}
			}
		},
		computed: {
			creditsum: function () {
				let sum = 0;
				for (let subj in this.subjects) {
					if (this.subjects[subj].credit) sum += parseInt(this.subjects[subj].credit);
				}
				return sum;
			}
		}
	}
</script>

<style scoped>
	.bme-container {
		margin: 5px 10px;
		padding: 10px;
		padding-left: 2.5em;
		border: 1px solid #bbbbbb;
		border-radius: 5px;
		position: relative;
		transition: 0.3s;
	}

	.bme-container.term {
		min-height: 110px;
	}

	.bme-container.isdrop {
		-webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
		-moz-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
		box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
		transition: 0.3s;
	}

	body.is-dragging .bme-container > * {
		pointer-events: none;
	}

	.subject-title-aside {
		position: absolute;
		left: 0;
		top: 100%;
		padding-top: 3px;
		padding-left: 8px;
		-webkit-transform: rotate(-90deg);
		-ms-transform: rotate(-90deg);
		transform: rotate(-90deg);
		-webkit-transform-origin: 0 0;
		-ms-transform-origin: 0 0;
		transform-origin: 0 0;
		z-index: 100;
		font-size: 1.6em;
		text-transform: uppercase;
		/*text-shadow: rgba(0, 0, 0, 0.3) 2px 2px 10px;*/
	}

	.subject-credits-aside{
		position: absolute;
		width:20px;
		height:20px;
		top: 5px;
		left: 5px;
		border:1px solid #333333;
		border-radius: 50%;
		text-align: center;
	}
</style>
