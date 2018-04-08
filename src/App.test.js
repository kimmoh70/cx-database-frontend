import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, {EnzymeSelector, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VehicleGrid from './VehicleGrid';

Enzyme.configure({adapter: new Adapter()});

test('displays title', () => {
    const div = shallow(<App />);

    expect(div.find('h1').text()).toContain('CX Database');

})

test('displays grid', () => {
    const div = mount(<App />);

    expect(div.find(VehicleGrid).length).toBe(1);
})