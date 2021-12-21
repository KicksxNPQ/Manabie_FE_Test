import React from 'react';
import ToDoPage from '../src/ToDoPage'
import {shallow} from 'enzyme'

test('Testing to do app', () => {
    const wrapper = shallow(<ToDoPage />)
    expect(wrapper.find('.Todo__input').text()).toEqual('');
})