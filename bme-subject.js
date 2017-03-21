var cmp = Vue.component('bme-subject', {
	template : 	'<div>\
	<template v-for="subj in subjects">\
	<div class="subjcontainer" id="{{subj.code}}" draggable="true">\
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
			"subjects" :[
			{
				"code": "BMETE90AX00",
				"name": "Matematika A1a",
				"short": "Matematika A1a",
				"exam": "1",
				"credit": "6",
				"term": "1",
				"crossterm": "0"
			}, 
			{
				"code": "BMETE90AX02",
				"name": "Matematika A2a",
				"short": "Matematika A2a",
				"exam": "1",
				"credit": "6",
				"term": "2",
				"crossterm": "0"
			}, 
			{
				"code": "BMETE90AX10",
				"name": "Matematika A3a",
				"short": "Matematika A3a",
				"exam": "0",
				"credit": "4",
				"term": "3",
				"crossterm": "0"
			},
			{
				"code": "BMETE15AX02",
				"name": "Fizika A2",
				"short": "Fizika A2",
				"exam": "1",
				"credit": "2",
				"term": "2",
				"crossterm": "0"
			},
			{
				"code": "BMEGEMTAMT1",
				"name": "Anyagismeret",
				"short": "Anyagismeret",
				"exam": "1",
				"credit": "5",
				"term": "1",
				"crossterm": "0"
			}
		]};
	}
});

var vu = new Vue({
	el : '.subjects'
});
