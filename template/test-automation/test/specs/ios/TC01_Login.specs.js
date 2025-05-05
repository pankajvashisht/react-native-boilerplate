const loginScreen = require('../../screenobjects/ios/TC01_login.screen');
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

  it('Test Case 3 - Verify the error on inputting wrong email and password', async () => {
    await loginScreen.setInputValue(loginScreen.selectors.emailInputField, loginConstants.WRONG_USERNAME);
    await loginScreen.setInputValue(loginScreen.selectors.passwordInputField, loginConstants.WRONG_PASSWORD);
    await loginScreen.clickElement(loginScreen.selectors.signInButton);
    await loginScreen.waitForDisplay(loginScreen.selectors.invalidLoginMessage);
    await loginScreen.expectElementDisplayed(loginScreen.selectors.invalidLoginMessage);
  });

  it('Test Case 4 - Verify the error on inputting valid email and wrong password', async () => {
    await loginScreen.setInputValue(loginScreen.selectors.emailInputField, loginConstants.VALID_USERNAME);
    await loginScreen.setInputValue(loginScreen.selectors.passwordInputField, loginConstants.INVALID_PASSWORD);
    await loginScreen.clickElement(loginScreen.selectors.signInButton);
    await loginScreen.waitForDisplay(loginScreen.selectors.invalidLoginMessage);
    await loginScreen.expectElementDisplayed(loginScreen.selectors.invalidLoginMessage);
  });

  it('Test Case 5 - Verify user able to login with valid email and password', async () => {
    await loginScreen.setInputValue(loginScreen.selectors.emailInputField, loginConstants.VALID_USERNAME);
    await loginScreen.setInputValue(loginScreen.selectors.passwordInputField, loginConstants.VALID_PASSWORD);
    await loginScreen.clickElement(loginScreen.selectors.signInButton);
    await loginScreen.waitForDisplay(loginScreen.selectors.allowNotificationButton);
    await loginScreen.clickElement(loginScreen.selectors.allowNotificationButton);
    await loginScreen.waitForDisplay(loginScreen.selectors.feedListContainer);
    await loginScreen.expectElementDisplayed(loginScreen.selectors.feedListContainer);
  });

});
