import React from 'react';
import { shallow } from 'enzyme';
import SelectedMenuDisplay from './SelectedMenuDisplay';

function setup() {
  const props = {
    id: "test-selected-menu-display",
    classes: {root: "testClass"},
    label: "Test Label",
    handleClickListItem: null,
    options: ["Test Option 1", "Test Option 2", "Test Option 3"],
    selectedIndex: 1,
    anchorEl: null,
    handleClose: null,
    handleMenuItemClick: null
  };

  return shallow(<SelectedMenuDisplay {...props}/>);
}

describe('<SelectedMenuDisplay />', () => {
  it('should render constructor element: span, with classes given', () => {
    const wrapper = setup();
    const firstNode = wrapper.first();
    //console.log(wrapper.debug()); // View shallowly rendered component

    expect(firstNode.type()).toEqual('span');
    expect(firstNode.hasClass('testClass')).toEqual(true);
  });


});
