import React from 'react';
import {shallow} from 'enzyme';

import Header from './header';

describe("<Header />", ()=> {
  it('should render component', ()=> {
    shallow(<Header />);
  });

  // it('should have funciton from props', ()=> {
  //   const callback = jest.fn()
  //   const wrapper = shallow(<Header 
  //                             onRestartGame="Test"
  //                             onGenerateAuralUpdate={callback}/>)
    
  //   console.log(wrapper.props().onRestartGame)
  //   expect(wrapper.props().onRestartGame).toEqual(callback);
  // });
});