import React from 'react';
import { shallow } from 'enzyme';
import { ContentHeadComponent as ContentHead } from '../../components/ContentHead';

test('should render Header correctly', () => {
  const wrapper = shallow(<ContentHead />);
  expect(wrapper).toMatchSnapshot();
});
