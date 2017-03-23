var cont = Vue.component('bme-container', {
	template :
	 	'<div v-bind:class="{ \'bme-container\' : true, \'term\' : term }"\
			v-on:dragover="contenter($event)" v-on:dragleave="contleave($event)" v-on:drop="contdrop($event)">\
	<template v-for="subj in subjects">\
	<div class="subject" v-bind:id="subj.code" draggable="true" v-on:dragstart="startdrag($event)">\
		<div class="subj-title">\
			{{subj.short}} ({{subj.credit}})\
		</div>\
		<!--<div class="subj-down">\
			<div class="que" draggable="false"></div>\
			<div class="mark" draggable="false">2</div>\
			<div class="mark" draggable="false">3</div>\
			<div class="mark" draggable="false">4</div>\
			<div class="mark" draggable="false">5</div>\
			<div class="fail" draggable="false"></div>\
		</div>-->\
	</div>\
	</template>\
	</div>',
	/*
	template : 	'<div>\
	<template v-for="subj in subjects">\
		<bme-subject v-bind:subject="subj"></bme-subject>\
	</template>\
	</div>',*/
	props : ['term'],
	data : function () {
		if( ! this.term ){
			var that = this;
			Vue.http.get('./subjects.json').then(function(res){
				that.subjects = res.body.subjects;
			});
		}
		return {
			subjects : {}
		};
	},
	methods : {
		startdrag : function(ev){
			ev.dataTransfer.setData("text/plain", ev.target.id);
			ev.dataTransfer.setData("subjects", JSON.stringify(this.subjects[ev.target.id]));
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
});

var vu = new Vue({
	el : '.subjects',
	components : {
		'bme-subject' : BmeSubject
	}
});

var vu2 = new Vue({
	el : '.terms',
	components : {
		'bme-subject' : BmeSubject
	}
});
