import React from 'react';
import { shallow } from 'enzyme';
//import ReactShallowRenderer from 'react-test-renderer/shallow';
//import toJSON from 'enzyme-to-json';
import Header from '../../components/Header';

test('should render Header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();


    //expect(toJSON(wrapper)).toMatchSnapshot();

    //expect(wrapper.find('h1').text()).toBe('Expense App');
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});