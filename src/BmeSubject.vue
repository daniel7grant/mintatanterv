<template>
	<div v-bind:class="{ 'subject': true, 'is-dragged' : isdrag,
		'is-detailed' : detailedSubj && detailedSubj.code === subject.code,
		 }"
		 v-bind:id="subject.code"
		 v-on:dragstart="drag($event)"
		 v-on:dragenter="pass($event)"
		 v-on:dragend="end($event)"
		 v-on:mouseenter="detailed(subject)"
		 v-on:mouseleave="detailed()"
		 v-on:click="detailed(subject, true)"
		 draggable="true">
		<div class="subj-title" v-bind:style="{'background-color' : reqColor}">
			{{subject.short}}
		</div>
		<div v-bind:class="{'subj-down' : true, 'is-open' : detailedSubj && detailedSubj.code === subject.code}">
			<div class="fail" draggable="false">X</div>
			<div class="mark" draggable="false">2</div>
			<div class="mark" draggable="false">3</div>
			<div class="mark" draggable="false">4</div>
			<div class="mark" draggable="false">5</div>
			<div class="fail" draggable="false"></div>
		</div>
	</div>
</template>

<script>
	import getreq from './requires.js'

	export default {
		props: ['subject', 'detailed-subj'],
		data: function () {
			return {
				isdrag: false,
				requirementLists: [],
				continuationLists: []
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
				if (click) {
					if (this.detailedSubj && this.detailedSubj.code === this.subject.code)
						return this.$emit('detailed', {subject: {}, clicked: click});
				}
				return this.$emit('detailed', {subject: subj, clicked: click});
			}
		},
		computed: {
			reqColor: function () {
				if (this.detailedSubj) {
					for (let i = 1; this.requirementLists[i] && this.requirementLists[i].length; i++) {
						if (this.requirementLists[i].indexOf(this.detailedSubj.code) > -1)
							return 'rgba(255, 0, 0, ' + (1 - (i - 1) * 0.25) + ')';
					}
					for (let i = 1; this.continuationLists[i] && this.continuationLists[i].length; i++) {
						if (this.continuationLists[i].indexOf(this.detailedSubj.code) > -1)
							return 'rgba(0, 0, 255, ' + (1 - (i - 1) * 0.25) + ')';
					}
				}
				return '';
			}
		},
		mounted: function () {
			let k = 0;
			this.requirementLists[0] = [this.subject.code];
			do {
				this.requirementLists[++k] = getreq(this.requirementLists[k - 1]);
			} while (this.requirementLists[k] && this.requirementLists[k].length);
			k = 0;
			this.continuationLists[0] = [this.subject.code];
			do {
				this.continuationLists[++k] = getreq(this.continuationLists[k - 1], false);
			} while (this.continuationLists[k] && this.continuationLists[k].length);
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
		overflow: hidden;
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
		bottom: -18px;
		z-index: 9999;
		vertical-align: top;
		transition: 0.3s;
	}

	.subj-down.is-open {
		bottom: 5px;
		transition: 0.3s;
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
