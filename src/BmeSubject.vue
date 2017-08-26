<template>
	<div v-bind:class="{ 'subject': true, 'is-dragged' : isdrag,
		'is-detailed' : detailedSubj && detailedSubj.code === subject.code,
		'is-required' : detailedSubj && continuationList.indexOf(detailedSubj.code) > -1,
		'is-continue' : detailedSubj && requirementList.indexOf(detailedSubj.code) > -1,
		 }"
		 v-bind:id="subject.code"
		 v-on:dragstart="drag($event)"
		 v-on:dragenter="pass($event)"
		 v-on:dragend="end($event)"
		 v-on:mouseenter="detailed(subject)"
		 v-on:mouseleave="detailed()"
		 v-on:click="detailed(subject, true)"
		 draggable="true">
		<div class="subj-title">
			{{subject.short}}
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
	import getreq from './requires.js'
	export default {
		props: ['subject', 'detailed-subj'],
		data: function () {
			return {
				isdrag: false,
//				requirementList: [],
//				continuationList: []
			};
		},
		methods: {
			drag: function (ev) {
				this.isdrag = true;
				ev.dataTransfer.setData("text/plain", JSON.stringify(this.subject));
			},
			pass: function (ev) {
				document.body.classList.add('is-dragging');
				return true;
			},
			end: function (ev) {
				this.isdrag = false;
				document.body.classList.remove('is-dragging');
				if (ev.dataTransfer.dropEffect === "move")
					this.$emit('remove', this.subject.code);
			},
			detailed: function (subj, click) {
				this.$emit('detailed', {subject: subj, clicked: click});
			}
		},
		computed: {
			requirementList: function () {
				return getreq(this.subject.code);
			},
			continuationList: function () {
				return getreq(this.subject.code, false);
			}
		},
		mounted: function () {
//			for (let i = 0; getreq(this.subject.code); i++) {
//
//			}
//			for (let i = 0; getreq(this.subject.code, false); i++) {
//
//			}
		}
	}
</script>

<style scoped>
	.subject {
		background-color: white;
		width: 150px;
		margin-right: 5px;
		max-width: 150px;
		white-space: nowrap;
		display: inline-block;
		position: relative;
		text-align: left;
		-moz-user-select: -moz-none;
		-khtml-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	.subject.is-dragged {
		opacity: 0.7;
	}

	.subj-title {
		width: 90%;
		-webkit-border-radius: 3px;
		-moz-border-radius: 3px;
		border-radius: 3px;
		background-color: #cccccc;
		margin: 2px;
		padding: 5px;
		border-radius: 5px;
		position: relative;
		transition: all 0.3s;
		text-align: center;
		cursor: move;
		overflow: hidden;
	}

	.subject.is-detailed .subj-title {
		background-color: #808080;
	}

	.subject.is-required .subj-title {
		background-color: red;
	}

	.subject.is-continue .subj-title {
		background-color: blue;
	}

	.subj-title.is-down {
		padding-bottom: 25px;
	}

	.subj-title > span {
		/*font-size: ?*/
		position: relative;
		display: inline-block;
		cursor: move;
		margin: 0px;
		vertical-align: middle;
	}

	.subj-title > div {
		cursor: pointer;
		width: 25px;
		height: 25px;
		vertical-align: middle;
	}

	.subj-down {
		background-color: transparent;
		height: 18px;
		width: 100%;
		border-top: 0px solid black;
		position: absolute;
		left: 10px;
		bottom: 5px;
		z-index: 9999;
		vertical-align: top;
	}

	.subj-down > div {
		display: inline-block;
		position: relative;
		cursor: pointer;
		width: 18px;
		height: 18px;
		z-index: 9999;
	}

	.subj-down > .que {
		background-size: 100% 100%;
	}

	.subj-down > .fail {
		background-size: 100% 100%;
	}

	.subj-down > .mark {
		font-family: 'Arial';
		font-size: 16px;
		font-weight: bold;
		font-style: italic;
		line-height: 12px;
		text-align: center;
		vertical-align: middle;
	}
</style>
