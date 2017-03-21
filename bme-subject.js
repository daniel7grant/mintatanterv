var cmp = Vue.component('bme-subject', {
	template : 	'<div>\
	<template v-for="subj in subjects">\
	<div class="subjcontainer" v-bind:id="subj.code" draggable="true">\
		<div class="subject">\
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
	data : function () {
		return {
			subjects : {}
		};
	},
	mounted : function (){
		console.log('lol')
		this.fetchx();
	},
	methods : {
		fetchx : function(){
			var that = this;
			Vue.http.get('./subjects.json').then(function(res){
				that.subjects = res.body.subjects;
				console.log(res.body.subjects);
			});
		}
	}
});

var vu = new Vue({
	el : '.subjects'
});
