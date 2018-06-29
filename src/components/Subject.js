import React from 'react'
import { connect } from 'react-redux'
import fuzzysearch from 'fuzzysearch'
import { dragSubject, cancelDrag } from '../actions';

class Subject extends React.Component {
	constructor(props) {
		super(props);
		this.dragStart = this.dragStart.bind(this);
		this.dragEnd = this.dragEnd.bind(this);
	}

	dragStart(ev) {
		ev.dataTransfer.setData("text/plain", this.props.subject.id);
		this.props.drag(this.props.subject.id);
	}

	dragEnd(ev) {
		this.props.end();
	}

	render() {
		return (
			<li id={this.props.subject.id}
				className={"Subject " + (this.props.isFiltered ? 'filtered' : '')}
				draggable="true"
				onDragStart={this.dragStart}
				onDragEnd={this.dragEnd}>
				{this.props.subject.name}
			</li>
		);
	}
}

export default connect(
	(state, ownProps) => ({
		isFiltered: !fuzzysearch(state.filter.toLowerCase(), ownProps.subject.name.toLowerCase())
	}),
	(dispatch) => ({
		drag: (id) => dispatch(dragSubject(id)),
		end: () => dispatch(cancelDrag())
	})
)(Subject);