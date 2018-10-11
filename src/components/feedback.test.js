import React from 'react';
import {shallow} from 'enzyme';

import Feedback from './feedback.js';

describe('<Feedback />', ()=> {
  it('should render component', ()=> {
    shallow(<Feedback />);
  });

  it('should have h2 element with proper text', ()=> {
    const testFeedback = "test";
    const testGuessCount = 4
    const wrapper = shallow(<Feedback feedback={testFeedback} guessCount={testGuessCount}/>)
    
    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.find('h2').text()).toEqual(`${testFeedback} Guess again!`)
  });
});
