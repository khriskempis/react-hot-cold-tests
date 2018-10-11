import React from 'react';
import {shallow} from 'enzyme';

import AuralStatus from './aural-status';

describe('<AuralStatus />', () => {
  it('should render component', ()=> {
    shallow(<AuralStatus />)
  }); 

  it('should have a p element', ()=> {
    const wrapper = shallow(<AuralStatus />);
    expect(wrapper.find('.visuallyhidden')).toHaveLength(1);
  });

  it('should have the proper status', ()=> {
    const testStatus = "test"
    const wrapper = shallow(<AuralStatus auralStatus={testStatus}/>)
    expect(wrapper.find('p').text()).toEqual(testStatus)
  })
});