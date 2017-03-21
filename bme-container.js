var cont = Vue.component('bme-container', {
	template : 	'<div v-bind:class="{ \'bme-container\' : true, \'term\' : term }">\
	<template v-for="subj in subjects">\
	<div class="subject" v-bind:id="subj.code" draggable="true">\
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
	</div>',
	*/
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
	}
});

var vu = new Vue({
	el : '.subjects'
});

var vu2 = new Vue({
	el : '.subjects2'
});
