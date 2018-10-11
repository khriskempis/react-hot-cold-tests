import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';

describe('<Game />', ()=> {
  it('should render component', ()=> {
    shallow(<Game />);
  });

  it('should render all components', ()=> {
    const wrapper = shallow(<Game />);
    expect(wrapper.find('Header')).toHaveLength(1);
    expect(wrapper.find('GuessSection')).toHaveLength(1);
    expect(wrapper.find('StatusSection')).toHaveLength(1);
    expect(wrapper.find('InfoSection')).toHaveLength(1);
  });

  it('should reject value that isn\'t a number', ()=> {
    const invalidInput = 'aaa';
    const wrapper = shallow(<Game />);
    wrapper.instance().makeGuess(invalidInput)
    expect(wrapper.state('feedback')).toEqual('Please enter a valid number');
  });

  it('should add guess to state', ()=>{
    const testGuess = 43;
    const wrapper = shallow(<Game />)
    wrapper.instance().makeGuess(testGuess)
    expect(wrapper.state('guesses')).toHaveLength(1);
  });

  it('should restart game when clicked', ()=> {
    const wrapper = shallow(<Game />)
    wrapper.instance().restartGame();
    expect(wrapper.state('feedback')).toEqual('Make your guess!');
  })

  // it('should update aural status', ()=> {

  // });
});

