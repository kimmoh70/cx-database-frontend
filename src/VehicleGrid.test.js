import React from 'react';
import ReactDOM from 'react-dom';
import VehicleGrid from './VehicleGrid';
import Enzyme, {EnzymeSelector, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

test('exists', () => {
    const div = shallow(<VehicleGrid />);

    expect(div).not.toBeNull();
})

test('displays header', () => {
    const div = shallow(<VehicleGrid />);

    expect(div.find('h1').text()).toContain('Vehicles');
})
