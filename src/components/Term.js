import React from 'react'
import Subject from './Subject'
import { connect } from 'react-redux';
import { dropSubject } from '../actions'

class Term extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isDragOver: false };
		this.setDrag = this.setDrag.bind(this);
		this.drop = this.drop.bind(this);
	}

	setDrag(over) {
		return (ev) => {
			this.setState({ isDragOver: over });
			ev.preventDefault();
		}
	}

	drop(ev) {
		this.setDrag(false)(ev);
		this.props.drop(ev.dataTransfer.getData("text/plain"), this.props.term);
	}

	render() {
		return (
			<div className={'Term' + (this.state.isDragOver ? ' isdragover' : '')}
				onDragEnter={this.setDrag(true)} onDragOver={this.setDrag(true)}
				onDragLeave={this.setDrag(false)} onDrop={this.drop}>
				<div className="title undrag">{this.props.term}. félév</div>
				<div className="credits undrag">{this.props.subjects.reduce((sum, subj) => sum + subj.credit, 0)}</div>
				<ul>
					{this.props.subjects.map((subj) => (
						<Subject key={subj.id} subject={subj} />
					))}
				</ul>
			</div>
		);
	}
}

export default connect(
	(state) => ({}),
	(dispatch) => ({ drop: (id, dest) => dispatch(dropSubject(id, dest)) })
)(Term);