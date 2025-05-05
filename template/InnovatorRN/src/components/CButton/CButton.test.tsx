import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CButton from './index';

describe('Render CButton', () => {
  const onPressMock = jest.fn();

  it('renders button text', () => {
    const {getByText} = render(<CButton text="SIGN IN" onPress={onPressMock} />);
    const buttonText = getByText('SIGN IN');
    expect(buttonText).toBeTruthy();
  });

  it('calls onPress when button is pressed', () => {
    const {getByText} = render(<CButton text="SIGN IN" onPress={onPressMock} />);
    const button = getByText('SIGN IN');
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalled();
  });
});
