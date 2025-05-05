import React from 'react';
import {render} from '@testing-library/react-native';
import CTextBox from '.';

describe('CTextBox', () => {
  it('renders correctly with default props', () => {
    const {getByTestId} = render(<CTextBox />);
    const textBoxContainer = getByTestId('textbox-container');
    const input = getByTestId('textbox-input');

    expect(textBoxContainer).toBeDefined();
    expect(input).toBeDefined();
  });

  it('renders correctly with custom container style', () => {
    const customContainerStyle = {backgroundColor: 'red'};
    const {getByTestId} = render(<CTextBox containerStyle={customContainerStyle} />);
    const textBoxContainer = getByTestId('textbox-container');
  });

  it('renders correctly with secureTextEntry', () => {
    const {getByTestId} = render(<CTextBox hidePassword />);
    const input = getByTestId('textbox-input');

    expect(input.props.secureTextEntry).toBe(true);
  });
});
