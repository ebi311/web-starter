import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'mock-local-storage';

Enzyme.configure({ adapter: new Adapter() });
