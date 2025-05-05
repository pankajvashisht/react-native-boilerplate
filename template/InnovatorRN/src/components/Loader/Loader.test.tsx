import React from 'react';
import {render} from '@testing-library/react-native';
import Loader from '.';

describe('Loader', () => {
  it('does not render when loading is false', () => {
    const {queryByTestId} = render(<Loader loading={false} />);
    const loaderElement = queryByTestId('loader');

    expect(loaderElement).toBeNull();
  });

  it('renders with default props', () => {
    const {getByTestId, getByRole} = render(<Loader loading={true} />);
    const loaderContainer = getByTestId('loader-container');
    expect(loaderContainer).toBeDefined();
  });

  it('renders with absolute positioning', () => {
    const {getByTestId} = render(<Loader loading={true} absolute />);
    const loaderContainer = getByTestId('loader-container');
    const absoluteLoaderSubContainer = getByTestId('absolute-loader-subcontainer');
    const activityIndicator = getByTestId('activity-indicator');

    expect(loaderContainer).toBeDefined();
    expect(absoluteLoaderSubContainer).toBeDefined();
    expect(activityIndicator).toBeDefined();
  });
});
