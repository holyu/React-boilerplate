import React from 'react';
import { shallow } from 'enzyme';
import { LoadingPageComponent as LoadingPage } from '../../components/LoadingPage';

test('should render LoadingPage correctly', () => {
  const wrapper = shallow(<LoadingPage />);
  expect(wrapper).toMatchSnapshot();
});
