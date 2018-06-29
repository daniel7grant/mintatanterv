import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

/* Setup Enzyme */
configure({ adapter: new Adapter() });

/* Mock localstorage */
global.localStorage = {
	getItem : jest.fn().mockReturnValue('{}'),
	setItem : jest.fn(),
	clear : jest.fn()
}