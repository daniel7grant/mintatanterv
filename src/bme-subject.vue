<template>
	<div v-bind:class="{ subject: true, isdragged : isdrag }"
		v-bind:id="subject.code" v-on:dragstart="drag($event)" v-on:dragend="end($event)" v-on:dragenter="pass($event)" draggable="true">
		<div class="subj-title">
			{{subject.short}} ({{subject.credit}})
		</div>
		<!--<div class="subj-down">
			<div class="que" draggable="false"></div>
			<div class="mark" draggable="false">2</div>
			<div class="mark" draggable="false">3</div>
			<div class="mark" draggable="false">4</div>
			<div class="mark" draggable="false">5</div>
			<div class="fail" draggable="false"></div>
		</div>-->
	</div>
</template>

<script>
	export default {
		props : ['subject'],
		data: function(){
			return {
				isdrag: false
			};
		},
		methods : {
			drag : function(ev){
				this.isdrag = true;
				ev.dataTransfer.setData("text/plain", JSON.stringify(this.subject));
			},
			pass: function (ev) {
				this.$emit('pass');
				return true;
			},
			end: function(ev){
				this.isdrag = false;
				if(ev.dataTransfer.dropEffect === "move")
					this.$emit('remove', this.subject.code);
			}
		}
	}
</script>

<style scoped>
.subject{
	background-color:white;
	width:150px;
	margin-right:5px;
	max-width:150px;
	white-space:nowrap;
	display:inline-block;
	position:relative;
	text-align:left;
	-moz-user-select: -moz-none;
	-khtml-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none;
}
.subject.isdragged{
	opacity: 0.7;
}

.subj-title{
	width: 90%;
	-webkit-border-radius: 3px;
	-moz-border-radius: 3px;
	border-radius: 3px;
	background-color: #cccccc;
	margin: 3px;
	padding: 5px;
	border-radius: 5px;
	position: relative;
	transition: all 0.5s;
	text-align:center;
	cursor: move;
}

.subj-title.is-down{
	padding-bottom: 25px;
}

.subj-title > span{
	/*font-size: ?*/
	position:relative;
	display:inline-block;
	cursor:move;
	margin:0px;
	vertical-align: middle;
}

.subj-title > div{
	cursor:pointer;
	width: 25px;
	height: 25px;
	vertical-align: middle;
}

.subj-down{
	background-color: transparent;
	height: 18px;
	width:100%;
	border-top: 0px solid black;
	position: absolute;
	left: 10px;
	bottom: 5px;
	z-index: 9999;
	vertical-align: top;
}

.subj-down > div{
	display:inline-block;
	position:relative;
	cursor:pointer;
	width: 18px;
	height: 18px;
	z-index: 9999;
}

.subj-down > .que{
	background-size: 100% 100%;
}

.subj-down > .fail{
	background-size: 100% 100%;
}

.subj-down > .mark{
	font-family: 'Arial';
	font-size: 16px;
	font-weight:bold;
	font-style: italic;
	line-height: 12px;
	text-align: center;
	vertical-align: middle;
}
</style>
