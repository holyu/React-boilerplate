import React from 'react';
import { shallow } from 'enzyme';
import { DashboardPageComponent as DashboardPage } from '../../components/DashboardPage';

test('should render DashboardPage correctly', () => {
  const wrapper = shallow(<DashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
