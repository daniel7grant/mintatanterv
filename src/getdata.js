import subjects from './subjects.js'
export default function(term){
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
