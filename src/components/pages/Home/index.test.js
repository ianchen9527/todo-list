import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Home from './index';

describe('Home', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it('should render without crashing', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
