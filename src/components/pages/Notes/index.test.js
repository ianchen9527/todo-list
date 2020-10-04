import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Notes from './index';

describe('Notes', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Notes />);
  });

  it('should render without crashing', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
