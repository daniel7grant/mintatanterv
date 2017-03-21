var cmp = Vue.component('bme-subject', {
	template : 	'\
	<div class="subjcontainer" v-bind:id="subject.code" draggable="true">\
		<div class="subject">\
			{{subject.short}} ({{subject.credit}})\
		</div>\
		<!--<div class="subj-down">\
			<div class="que" draggable="false"></div>\
			<div class="mark" draggable="false">2</div>\
			<div class="mark" draggable="false">3</div>\
			<div class="mark" draggable="false">4</div>\
			<div class="mark" draggable="false">5</div>\
			<div class="fail" draggable="false"></div>\
		</div>-->\
	</div>',
	props : ['subject']
});	
