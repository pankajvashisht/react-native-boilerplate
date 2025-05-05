const loginScreen = require('../../screenobjects/android/TC01_login.screen');
const loginConstants = require('../../../constants/loginConstants');
const testConstants = require('../../../constants/testConstants');

describe('Login', () => {

  it('Test Case 1 - Launch the application and verify landing on SignIn Page', async () => {
    await loginScreen.waitForDisplay(loginScreen.selectors.signInHeaderText);
    await loginScreen.expectElementDisplayed(loginScreen.selectors.logo);
    await loginScreen.expectElementDisplayed(loginScreen.selectors.signInHeaderText);
  });

  it('Test Case 2 - Verify default values and names of all fields', async () => {
    await loginScreen.expectElementDisplayed(loginScreen.selectors.emailLabel);
    await loginScreen.expectElementDisplayed(loginScreen.selectors.passwordLabel);
    await loginScreen.expectElementToHaveText(loginScreen.selectors.emailInputField, testConstants.EMAIL_PLACEHOLDER);
    await loginScreen.expectElementToHaveText(loginScreen.selectors.passwordInputField, testConstants.PASSWORD_PLACEHOLDER);
  });

  it('Test Case 3 - Verify error when user clicks SignIn button leaving email and password blank', async () => {
    await loginScreen.clickElement(loginScreen.selectors.signInButton);
    await loginScreen.waitForDisplay(loginScreen.selectors.emailError);
    await loginScreen.expectElementToHaveText(loginScreen.selectors.emailError, testConstants.EMAIL_EMPTY_ERROR);
    await loginScreen.expectElementToHaveText(loginScreen.selectors.passwordError, testConstants.PASSWORD_EMPTY_ERROR);
  });

  it('Test Case 4 - Verify user is unable to login with invalid email and password', async () => {
    await loginScreen.setInputValue(loginScreen.selectors.emailInputField, loginConstants.INVALID_USERNAME);
    await loginScreen.setInputValue(loginScreen.selectors.passwordInputField, loginConstants.BLANK_PASSWORD);
    await loginScreen.clickElement(loginScreen.selectors.signInButton);
    await loginScreen.waitForDisplay(loginScreen.selectors.emailError);
    await loginScreen.expectElementToHaveText(loginScreen.selectors.emailError, testConstants.INVALID_EMAIL_ERROR);
    await loginScreen.expectElementToHaveText(loginScreen.selectors.passwordError, testConstants.PASSWORD_EMPTY_ERROR);
  });

  it('Test Case 5 - Verify the error on inputting wrong email and password', async () => {
    await loginScreen.setInputValue(loginScreen.selectors.emailInputField, loginConstants.WRONG_USERNAME);
    await loginScreen.setInputValue(loginScreen.selectors.passwordInputField, loginConstants.WRONG_PASSWORD);
    await loginScreen.clickElement(loginScreen.selectors.signInButton);
    await loginScreen.waitForDisplay(loginScreen.selectors.invalidLoginMessage);
    await loginScreen.expectElementDisplayed(loginScreen.selectors.invalidLoginMessage);
  });

  it('Test Case 6 - Verify the error on inputting valid email and wrong password', async () => {
    await loginScreen.setInputValue(loginScreen.selectors.emailInputField, loginConstants.VALID_USERNAME);
    await loginScreen.setInputValue(loginScreen.selectors.passwordInputField, loginConstants.INVALID_PASSWORD);
    await loginScreen.clickElement(loginScreen.selectors.signInButton);
    await loginScreen.waitForDisplay(loginScreen.selectors.invalidLoginMessage);
    await loginScreen.expectElementDisplayed(loginScreen.selectors.invalidLoginMessage);
  });

  it('Test Case 7 - Verify user able to login with valid email and password', async () => {
    await loginScreen.setInputValue(loginScreen.selectors.emailInputField, loginConstants.VALID_USERNAME);
    await loginScreen.setInputValue(loginScreen.selectors.passwordInputField, loginConstants.VALID_PASSWORD);
    await loginScreen.clickElement(loginScreen.selectors.signInButton);
    await loginScreen.waitForDisplay(loginScreen.selectors.allowNotificationButton);
    await loginScreen.clickElement(loginScreen.selectors.allowNotificationButton);
    await loginScreen.waitForDisplay(loginScreen.selectors.feedListContainer);
    await loginScreen.expectElementDisplayed(loginScreen.selectors.feedListContainer);
  });

});
