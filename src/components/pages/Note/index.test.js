import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Note from './index';

describe('Notes', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Note />);
  });

  it('should render without crashing', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
