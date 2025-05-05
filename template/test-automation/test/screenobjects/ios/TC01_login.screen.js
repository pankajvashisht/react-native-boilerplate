const { default: Controller } = require("./controller");

class LoginScreen extends Controller {
  constructor() {
    super();
    this.selectors = {
      logo: '~AppLogo',
      signInHeaderText: '~SignInHeader',
      emailLabel: '~EmailLabel',
      passwordLabel: '~PasswordLabel',
      signInButton: '~SignInButton',
      allowNotificationButton: '//*[@resource-id="dummy.notification.permission.allow"]',
      emailError: '~EmailErrorMessage',
      passwordError: '~PasswordErrorMessage',
      emailInputField: '~EmailInputField',
      passwordInputField: '~PasswordInputField',
      invalidLoginMessage: '//android.widget.TextView[@text="Invalid Login Or Password"]',
      feedListContainer: '~FeedListContainer'
    };
  }
}

module.exports = new LoginScreen();
