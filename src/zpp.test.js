import React from 'react';
import { shallow } from 'enzyme'
import App from './App';

describe('Testing app component', () => {
    it('render without errors', () => {
        const component = shallow(<App />)
        console.log(component.debug());

        const wrapper = component.find('.App-header');
        expect(wrapper.length).toBe(1)
    });
});