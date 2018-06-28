import defaultSubjects from '../res/data/subjects.json'
import ACTION from '../actions'

export default (state = defaultSubjects, action) => {
	switch (action.type) {
		case ACTION.RESET_SUBJECTS: return defaultSubjects;
		case ACTION.DROP_SUBJECT: return state.map((subj) =>
			subj.id === action.id ? Object.assign(subj, {term : action.dest}) : subj);
		default: return state;
	}
}