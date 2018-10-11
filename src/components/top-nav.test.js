import React from 'react';
import {shallow} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav >', ()=>{
  it('renders without crashing', () => {
      shallow(<TopNav />);
  });

  it('renders three links', () =>{
      const wrapper = shallow(<TopNav />)
      expect(wrapper.contains(<a 
      href="#what" 
      className="what"
      aria-label="How to play">What?</a>)).toEqual(true);
      expect(wrapper.find('a')).toHaveLength(3);
      
  });

  // it('new game responds to click', () => {
  //   const callback = jest.fn()
  //   const wrapper = shallow(<TopNav onClick={callback}/>);

  //   console.log(wrapper.find('.new').props().onClick)
  //   wrapper.simulate('click');
  //   expect(wrapper.find('.new').props().onClick).toHaveBeenCalled()
  // });
});