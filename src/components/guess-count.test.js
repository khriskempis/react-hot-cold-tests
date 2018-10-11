import React from 'react';
import {shallow} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', ()=> {
  it('should render component', ()=> {
    shallow(<GuessCount />);
  });

  it('should include h2', ()=> {
    const wrapper = shallow(<GuessCount />);
    expect(wrapper.find('#guessCount')).toHaveLength(1);
  });
});