<template>
	<div class="subject" v-bind:id="subject.code" v-on:dragstart="startdrag($event)" draggable="true">
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
		data : function() {
			return {
				subj : this.subject
			};
		},
		methods : {
			startdrag : function(ev){
				ev.dataTransfer.setData("text/plain", ev.target.id);
				ev.dataTransfer.setData("subjects", JSON.stringify(this.subjects[ev.target.id]));
				this.$emit('subjdrag');
			},
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

	.subj-title{
		width: 90%;
		-webkit-border-radius: 5px;
		-moz-border-radius: 5px;
		background: linear-gradient(0deg, rgba(242,246,248,0.8) 0%, rgba(255,255,255,0.3) 100%);
		background-color: rgba(0, 58, 255, 0.5);
		box-shadow: inset 0px 0px 15px 0px rgba(255, 255, 255, 1);
		padding: 5px 5px 10px 10px;
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
