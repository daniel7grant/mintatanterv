import subjects from './subjects.js'
export function getdata(term){
	if(localStorage){
		if(term){
			if(localStorage['subject' + term])
				return JSON.parse(localStorage['subject' + term]) || {};
			else return {};
		}
		else {
			if(localStorage.remain) return JSON.parse(localStorage.remain);
			else {
				//fetch API call to server
				localStorage.remain = JSON.stringify(subjects);
				return subjects;
			}
		}
	}
}
export function setdata(term, object){
	if(localStorage){
		if(term){
			localStorage['subject' + term] = JSON.stringify(object);
		}
		else {
			localStorage.remain = JSON.stringify(object);
		}
	}
}

export function getsubject(code) {
	return subject[code];
}