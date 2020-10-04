import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import NoteEdit from './index';

describe('Notes', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NoteEdit />);
  });

  it('should render without crashing', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
