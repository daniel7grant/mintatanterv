import subjects from './subjects.js'
export function getdata(term) {
	if (localStorage && term) {
		if (localStorage['subject' + term])
			return JSON.parse(localStorage['subject' + term]) || {};
		else {
			let termsubjects = {};
			for (let code in subjects) {
				if(subjects[code].term === term.toString())
					termsubjects[code] = subjects[code];
			}
			return termsubjects;
		}
	}
}

export function setdata(term, object) {
	if (localStorage) {
		if (term) {
			localStorage['subject' + term] = JSON.stringify(object);
		}
		else {
			localStorage.remain = JSON.stringify(object);
		}
	}
}

export function cleardata(){
	localStorage.clear();
}

export function getsubject(code) {
	return subjects[code];
}