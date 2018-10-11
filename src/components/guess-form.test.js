import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', ()=> {
  it('should render compnonent', ()=> {
    shallow(<GuessForm />)
  });

  it('should fire onMakeGuess when form is submitted', ()=> {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onMakeGuess={callback}/>)
    const value = '1';
    wrapper.find('.text').instance().value = value;
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalledWith(value);
  });
});
