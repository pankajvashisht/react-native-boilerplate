import React from 'react';
import {render} from '@testing-library/react-native';
import CLabel from '.';

describe('CLabel', () => {
  it('renders correctly with text content', () => {
    const {getByText} = render(<CLabel>Hello, world!</CLabel>);
    const labelElement = getByText('Hello, world!');

    expect(labelElement).toBeDefined();
  });

  it('renders correctly with custom style', () => {
    const customStyle = {fontSize: 18, color: 'blue'};
    const {getByText} = render(<CLabel style={customStyle}>Custom Label</CLabel>);
    const labelElement = getByText('Custom Label');
  });

  it('renders correctly with testID', () => {
    const testID = 'custom-label';
    const {getByTestId} = render(<CLabel testID={testID}>Test Label</CLabel>);
    const labelElement = getByTestId(testID);

    expect(labelElement).toBeDefined();
  });
});
