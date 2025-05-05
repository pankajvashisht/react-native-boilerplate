# <img src="https://avatars.githubusercontent.com/u/12858694" width="30" height="30" /> React Native Boilerplate

## Getting Started


Assuming that you have followed the [Initial Getting Started Guide](https://reactnative.dev/docs/environment-setup) for React-Native Environment Setup, follow the below steps to create a new project using the template.


---
**IMPORTANT NOTE**

The initialization command will fail if you have the global legacy `react-native-cli` installed on your system. Make sure you uninstall it first:

```bash
npm uninstall -g react-native-cli
```

or

```bash
yarn global remove react-native-cli
```

More info can be found at [react-native-community/cli](https://github.com/react-native-community/cli#about).

---

### Initializing a new project with React-Native v0.67.2

```bash
$ npx react-native init MyApp --template https://github.com/founderandlightning/react-native-innovator.git
```

## Required data
### Bitrise Secrets and Env Vars
As we are using the `Bitrise` for our CD flow, there are some required `secrets` and `env vars` which are being used in the workflow steps. Env vars should be pre-populated and be available to use. Please make sure you have these `secrets` and `env vars` on your Bitrise Dashboard.

#### Secrets
- APPLE_TEAM_ID
- APPLE_ID_TEAM_NAME
- APP_STORE_CONNECT_APP_ID
- APPLE_EMAIL_ID
- APPLE_ID_PASSWORD
- APPLE_APP_SPECIFIC_PASSWORD
- STAGING_RN_API_BASE_URL
- PRODUCTION_RN_API_BASE_URL
- CODE_PUSH_DEPLOYMENT_KEY_IOS: This is for OTA
- CODE_PUSH_DEPLOYMENT_KEY_ANDROID: This is for OTA
- BITRISE_ACCESS_TOKEN: This is access token created from settings of bitrise account and it is needed to run primary workflow on tag creation. We also need to add incomming webhook in bitrise for tag creation. Steps for Access token generation and webhook setup is explained in sections below.

#### Env Vars
- PROJECT_LOCATION
- MODULE
- BITRISE_PROJECT_PATH
- BITRISE_EXPORT_METHOD
- PRODUCTION_RN_BUNDLE_ID
- STAGING_RN_BUNDLE_ID

### Others
- Please update the correct GitHub repository name(in place of the word `InnovatorRN`) in the file [checkRevieweeCommitStatus](./template/InnovatorRN/scripts/checkRevieweeCommitStatus.sh#L5) to check the rejected or pending commits on Reviewee.

### Generating BITRISE_ACCESS_TOKEN
 Steps: 
 1. Login to bitrise.io account
 2. Click on username on top-right corner in which bitrise project is created
 3. Click on `Profile settings` option
 4. On profile page, click on `Security` option in left navigation
 5. click on `+ Create Token` button 
 6. Enter `Name` for token and expiration as `never`. Then Create token and copy token value as it is readable only once.

### Setting up incomming webhook on bitrise
 Follow [these](https://devcenter.bitrise.io/en/apps/webhooks/adding-incoming-webhooks.html#registering-an-incoming-webhook-automatically) steps to setup webhook. And then follow below steps to add tag creation capability in webhook:
 1. Login to Github and go to your repository.
 2. Go to `Settings` of repo
 3. Click on `Webhooks` in left panel
 4. Click `edit` button next to webhook added from bitrise
 5. Go to `Which events would you like to trigger this webhook?` section and under `Let me select individual events.` select `Branch or tag creation` and update the webhook by clicking `Update Webhook` button.

## Running the project
  Use [this](template/docs/PROJECT_SETUP.md) setup guide to run the project on your local machine.

## Tech Stack
- [React Native](https://facebook.github.io/react-native/) for building mobile apps using Javascript.
- [Redux](https://redux.js.org/) a predictable state container for Javascript apps.
- [Redux Toolkit](https://redux-toolkit.js.org/) a toolset for efficient Redux development.
- [React Navigation](https://reactnavigation.org/) for navigation.
- [React Hooks](https://reactjs.org/docs/hooks-intro.html) for state management in functional components.
- [react-native-config](https://github.com/luggit/react-native-config) for managing env variables. Refer to [this](https://ajaysidhu17.medium.com/configure-production-and-staging-environments-in-react-native-6c0d0faad034) article for staging and production environments setup details.
- [Appium](https://appium.io/) for e2e testing.
- [Jest](https://jestjs.io/) for TDD.
- [Bitrise](https://www.bitrise.io/) for CD and build automation.
- `Reviewee` for code review.
- [CircleCI](https://circleci.com/)(used along with `Reviewee`) for CI and build notifications. Refere to [this](template/docs/REVIEWEE_CIRCLE_CI_CONFIG.md) doc for setting up the build notifications.
- [i18n-js](https://github.com/fnando/i18n-js) for localisation. If your app will require to fetch locale from device please prefer using [react-native-localize](https://github.com/zoontek/react-native-localize)

## Android notes:

1. To avoid any error like ``SDK location not found`` while running ``react-native run-android``, please open the project in Android Studio for the first time so that Android Studio could automatically insert the Android SDK path and other configuration settings.

2. To avoid error like: ``debug.keystore not found for signing config 'debug'``, run the following command in the ``android/app/`` directory of the project to generate a debug keystore file:

```bash
keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000
```

## Commiting your changes
1. Make sure, that you have installed project dependencies so that the git hooks can do their job.
2. Write proper commit message. See how a minor change to your commit message style can make you a better programmer.
   
   ---
   `fixed sha <commit_sha>` to fix the rejected Reviewee commit

   or

   ```
   <type>: <description>

   [trello card link]
   ```
   ---
   The type can be one of:

   - `feat`: (new feature for the user, not a new feature for build script)
   - `fix`: (bug fix for the user, not a fix to a build script)
   - `docs`: (changes to the documentation)
   - `chore`: (updating grunt tasks etc; no production code change)

   Example:

   ```
   chore: update bitrise step versions

   https://trello.com/c/XuDkkdXX
   ```

   See [conventionalcommits](https://www.conventionalcommits.org/en/v1.0.0/) for more information.

3. The Git Hooks run below tasks before commiting the code:
      - check ESLint errors
      - check commit message format
      - run test cases
      - check forbidden words

    If any git hook returns error, please fix the error and then try commiting again.

## Deploying new version 🚀

In order to prepare builds with new version:

1. Go to `./InnovatorRN` directory

```plain text
Note: If you are only updating the pre-release verion(other than major, minor or patch, e.g. `-4` in version `1.2.3-4`), you can skip to step 3.
```

2. While updating the major, minor or patch version(e.g. `1.1.0-n` to `1.1.1-n` or `1.1.0-n` to `1.2.0-n` or `1.1.0-n` to `2.0.0-n`), you will need to
   - manually update the version(major, minor or patch) in the `package.json` file while setting `pre-release` version to be `0`
   - commit & push the changes to GitHub

3. Run `yarn preRelease`. It will
   - update the pre-release version of `package.json`
   - update the [CHANGELOG.md](./testedme/CHANGELOG.md) file with new features/fixes based on the commit history
   - commit the `package.json` and `CHANGELOG.md` files
   - create a `git` tag for the current version

4. Check for branch name in Run `distributeTagBuild` script, keep branch name as main or master according to branch name your repo has, then Run `yarn distributeTagBuild`. It will trigger both iOS and Android workflows on Bitrise to generate the builds. When it's done, new builds (staging) would be available on TestFlight and Google Play. Builds are available in Bitrise too (`Apps & artifacts` tab in build details)

5. If you want to publish the apps - you will have to confirm it on TestFlight or Google Play Console
