<template>
	<div class="bme-details" v-if="hoverSubject || subject">
		<div v-if="hoverSubject">
			<h2>{{ hoverSubject.name }}</h2>
			<p><strong>Tárgykód: </strong>{{hoverSubject.code}}</p>
			<p><strong>Követelmény típus: </strong>{{parseInt(hoverSubject.exam) ? 'Vizsga' : 'Évközi jegy'}}</p>
			<p><strong>Kreditszám: </strong>{{hoverSubject.credit}}</p>
			<p><strong>Ajánlott félév: </strong>{{hoverSubject.term}}</p>
		</div>
		<div v-else>
			<h2>{{ subject.name }}</h2>
			<p><strong>Tárgykód: </strong>{{subject.code}}</p>
			<p><strong>Követelmény típus: </strong>{{parseInt(subject.exam) ? 'Vizsga' : 'Évközi jegy'}}</p>
			<p><strong>Kreditszám: </strong>{{subject.credit}}</p>
			<p><strong>Ajánlott félév: </strong>{{subject.term}}</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'bme-details',
		props: ['subject', 'hover-subject'],
		data: function () {
			return {};
		},
		methods: {}
	}
</script>

<style>
	.bme-details {
		height: 100%;
		margin: 5px 0px;
		padding: 10px;
		padding-left: 2.5em;
		border: 1px solid #bbbbbb;
		border-radius: 5px;
		position: relative;
		transition: 0.3s;
	}
</style>
