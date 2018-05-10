import React from 'react';
import { shallow } from 'enzyme';
import { LoginPageComponent as LoginPage } from '../../components/LoginPage';

test('should render LoginPage correctly', () => {
  const wrapper = shallow(<LoginPage login={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});

test('should call logout on button click', () => {
  const login = jest.fn();
  const wrapper = shallow(<LoginPage login={login} />);
  wrapper.find('button').simulate('click');
  expect(login).toHaveBeenCalled();
});
