import React from 'react';
import {render, screen} from '@testing-library/react-native';

import TestIds from 'constants/testIds';
import {wrapper} from 'utilities/testUtils';
import SignIn from '.';

const {signIn} = TestIds;

test('renders all components correctly', () => {
  //@ts-expect-error ignore the error as we are not passing the navigation prop
  render(<SignIn />, {wrapper});

  const emailInput = screen.getByTestId(signIn.emailInput);
  const passInput = screen.getAllByTestId(signIn.passwordInput);
  const signInButton = screen.getAllByTestId(signIn.signInButton);
  const forgotPassButton = screen.getAllByTestId(signIn.forgotPassButton);
  const createAccountButton = screen.getAllByTestId(signIn.createAccountButton);

  expect(emailInput).toBeDefined();
  expect(passInput).toBeDefined();
  expect(signInButton).toBeDefined();
  expect(forgotPassButton).toBeDefined();
  expect(createAccountButton).toBeDefined();
  const header = screen.getByRole('header', {name: 'Sign in to your account'});
  expect(header).toBeOnTheScreen();
});
