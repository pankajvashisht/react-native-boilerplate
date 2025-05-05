const { default: Controller } = require("./controller");

class LoginScreen extends Controller {
  constructor() {
    super();
    this.selectors = {
      draftLogo: '~DummyLogo',
      signInText: '~DummySignInHeadingText',
      emailText: '~DummyEmailInputLabel',
      passwordText: '~DummyPasswordInputLabel',
      signInButton: '~DummySignInButton',
      allowNotification: '//*[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]',
      emailErrorTestId: '~DummyEmailInputError',
      passwordErrorTestId: '~DummyPasswordInputError',
      emailInput: '~DummyEmailInputValue',
      passwordInput: '~DummyPasswordInputValue',
      invalidLoginOrPassword: '//android.widget.TextView[@text="Invalid Login Or Password"]',
      feedList: '~DummyFeedList'
    }
  }
}

module.exports = new LoginScreen();
