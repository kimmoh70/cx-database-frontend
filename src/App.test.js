import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

test('displays title', () => {
    const div = shallow(<App />);

    expect(div.find('h1').text()).toContain('CX Database');

})