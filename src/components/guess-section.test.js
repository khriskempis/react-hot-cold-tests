import React from 'react';
import {shallow} from 'enzyme';

import GuessSection from './guess-section';

describe('<GuessSection />', ()=> {
  it('should render component', ()=> {
    shallow(<GuessSection />)
  });

  it('should render with props', ()=> {
    const callback = jest.fn();
    const wrapper = shallow(<GuessSection feedback={3} guessCount={3} onMakeGuess={callback}/>)

    expect(wrapper.find('Feedback').props()).toEqual({ feedback:3, guessCount: 3 })
    // console.log(wrapper.find('GuessForm').props().OnMakeGuess)
  });
});