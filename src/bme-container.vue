<template>
	<div v-bind:class="{ 'bme-container' : true, 'term' : term, 'isdrop' : drophere }"
			v-on:dragenter="dragenter($event)"
			v-on:dragover="dragover($event)"
			v-on:dragleave="dragleave($event)"
			v-on:drop="drop($event)">
		<bme-subject v-for="(subj, index) in subjects"
					 v-bind:key="subj"
					 v-bind:subject="subj"
					 v-show="filtered[index]"
					 v-on:remove="remove($event)">
		</bme-subject>
	</div>
</template>

<script>
	import bmeSubject from './bme-subject.vue'
	import { getdata, setdata } from './accessdata.js'

	export default {
		name: 'bme-container',
		props: [ 'term' , 'filter', 'colormode' ],
		components: { bmeSubject },
		data: function () {
			return {
				subjects : getdata(this.term || false),
				drophere : false
			};
		},
		computed:{
			filtered : function(){
				var filt = {};
				for(var i in this.subjects)
				{
					if(this.filter){
						filt[i] = (this.subjects[i].short.toLowerCase().indexOf(this.filter.toLowerCase()) > -1);
					}
					else{
						filt[i] = true;
					}
				}
				return filt;
			}
		},
		methods: {
			dragenter: function(ev){
				var subj = JSON.parse(ev.dataTransfer.getData("text") || '{}');
				for(var i in this.subjects)
				{
					if(this.subjects[i].code == subj.code){
						this.drophere = false;
						return true;
					}
				}
				this.drophere = true;
				ev.preventDefault();
			},
			dragover: function(ev){
				if(this.drophere){
					ev.dataTransfer.dropEffect = "move";
					ev.preventDefault();
				}
			},
			dragleave: function(ev){
				this.drophere = false;
				ev.preventDefault();
			},
			drop: function(ev){
				this.drophere = false;
				var subj = JSON.parse(ev.dataTransfer.getData("text"));
				this.subjects[subj.code] = subj;
				setdata(this.term || false, this.subjects);
			},
			remove: function(code){
				for(var i in this.subjects)
				{
					if(this.subjects[i].code == code){
						this.$delete(this.subjects, i);
						setdata(this.term || false, this.subjects);
					}
				}
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
