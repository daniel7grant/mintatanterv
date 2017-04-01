<template>
	<div v-bind:class="{ 'bme-container' : true, 'term' : term }" v-on:subjdrag="dragsubj($event)"
		 v-on:dragover="contenter($event)" v-on:dragleave="contleave($event)" v-on:drop="contdrop($event)">
		<bme-subject  v-for="(subj, index) in subjects"
					  v-bind:key="subj"
					  v-bind:index="index"
					  v-bind:subject="subj">

		</bme-subject>
	</div>
</template>

<script>
	import bmeSubject from './bme-subject.vue'
	import subjects from './subjects.js'

	export default {
		name: 'bme-container',
		props : ['term'],
		components : { bmeSubject },
		data : function () {
			return subjects;
		},
		methods : {
			dragsubj : function(ev){
				console.log(ev);
			},
			contenter : function(ev){
				ev.target.classList.add('is-drop');
				ev.preventDefault();
			},
			contleave : function(ev){
				ev.target.classList.remove('is-drop');
			},
			contdrop : function(ev){
				ev.preventDefault();
				var subjects = JSON.parse(ev.dataTransfer.getData("subjects"));
				var id = ev.dataTransfer.getData("text");
				console.log(subjects);
				console.log(ev.target);
				ev.dataTransfer.clearData();
			}
		}
	}
</script>

<style scoped>
	.bme-container{
		margin: 5px 10px;
		padding: 10px;
		border: 1px solid #bbbbbb;
		border-radius: 5px;
	}

	.bme-container.term{
		min-height:80px;
	}

	.bme-container.is-drop{
		box-shadow: inset 0px 0px 20px 0px rgba(128, 128, 128, 0.2)
	}
</style>