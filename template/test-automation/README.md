# Appium 2 Setup and Automation Guide

This document provides a detailed guide on setting up your environment for running Appium 2 tests with WebdriverIO on both Android and iOS platforms, using LambdaTest. Follow the steps carefully to ensure a smooth setup.

## Prerequisites
- Node.js (version 18)
- Java 17 (Adoptium)
- Android Studio (latest version)
- Appium Inspector

## Installation Steps

### 1. Install Node.js
- Download and install Node.js version 18 from the [official website](https://nodejs.org/en/download).
- Uninstall any previous versions of Node.js before installing the new version.

### 2. Install Java 17
- Download and install Java 17 from Adoptium [here](https://adoptium.net/en-GB/temurin/releases/?version=17).
- During the installation, ensure you select "Set JAVA_Home and JAVAsoft" options to "will be installed to local" to set environment variables automatically.
- Uninstall any previous versions of Java before installing the new version.

### 3. Install Android Studio and Emulator
- Download and install the latest version of Android Studio from [here](https://developer.android.com/studio).
- Set up environment variables for the Android SDK:
  - Create a new system variable `ANDROID_HOME` and set its value to your Android SDK path (e.g., `C:\Users\<YourUsername>\AppData\Local\Android\Sdk`).
  - Add `%ANDROID_HOME%\platform-tools` and `%ANDROID_HOME%\tools` to your system PATH variables.

**Create a Virtual Device:**
- Under "Create device", select the desired device and OS version to emulate.

### 4. Install Appium Inspector
- Download and install Appium Inspector from the [GitHub releases page](https://github.com/appium/appium-inspector/releases).
- Configure the inspector with the following settings:
  ```
  Remote host: 127.0.0.1
  Remote Port: 4724
  Remote path: /
  ```

**JSON Representation Example:**
```json
{
  "appium:platformName": "android",
  "appium:platformVersion": "14.0",
  "appium:deviceName": "Pixel 8 Pro",
  "appium:automationName": "UiAutomator2"
}
```
- Save your Configure for further easy use

### 5. Install Global Dependencies
Run the following commands to install necessary global dependencies:
```bash
npm install -g appium@next
appium driver install xcuitest
appium driver install uiautomator2
npm install -g appium-doctor
npm install dotenv
npm install --global yarn
```

**Verify Installation:**
```bash
appium-doctor --android
```

### 6. Project Setup for Appium 2
**Install packages from the Automation folder:**
```bash
npm install
# OR
yarn
```

### 7. Create and Configure `.env` File
Create a `.env` file in the root of the automation folder (where `package.json` is located) and update it with your project details:
```
LT_USERNAME=your_lambdatest_username
LT_ACCESS_KEY=your_lambdatest_access_key
LT_GRID_URL=mobile-hub.lambdatest.com
LT_APP_ID=lt://your_lambdatest_app_id
```

### 8. Update the device details in the `capabilities.js` under config folder
```
ANDROID_STAGING_APP_LOCATION: 'your_local_storage_path/test-automation/app/android/staging.apk',
ANDROID_PROD_APP_LOCATION: 'your_local_storage_path/test-automation/app/android/prod.apk',
IOS_STAGING_APP_LOCATION: 'your_local_storage_path/test-automation/app/ios/staging.ipa',
IOS_PROD_APP_LOCATION: 'your_local_storage_path/test-automation/app/ios/prod.ipa',
BUILDNAME: 'build_name',

LT_ANDROID_SINGLE_DEVICE_NAME: 'Galaxy S23 Ultra',
LT_ANDROID_SINGLE_OSVERSION: '13.0',
LT_PARALLEL_ANDROID_DEVICE_ONE_NAME: 'Galaxy S24 Ultra',
LT_PARALLEL_ANDROID_ONE_OSVERSION: '14.0',
LT_PARALLEL_ANDROID_DEVICE_TWO_NAME: 'Galaxy S23 Ultra',
LT_PARALLEL_ANDROID_TWO_OSVERSION: '13.0',

LOCAL_ANDROID_DEVICE_NAME: 'Pixel 8',
LOCAL_ANDROID_OSVERSION: '14.0',

LOCAL_IOS_DEVICE_NAME : 'iPhone 15 Pro',
LOCAL_IOS_OSVERSION:'17.0',

LT_IOS_SINGLE_DEVICE_NAME: 'iPhone 15 Pro',
LT_IOS_SINGLE_OSVERSION: '17.0',
LT_PARALLEL_IOS_DEVICE_ONE_NAME: 'iPhone 15 Pro',
LT_PARALLEL_IOS_DEVICE_ONE_OSVERSION: '17.0',
LT_PARALLEL_IOS_DEVICE_TWO_NAME: 'iPhone 14',
LT_PARALLEL_IOS_DEVICE_TWO_OSVERSION: '16.0'
```

### 9. Running Appium Server for Appium Inspector
**Before running the virtual device in Android Studio:**
```bash
appium -p 4724
```

### 10. Running Tests with WebdriverIO
**To run the project:**
```bash
npx wdio {config file path} --spec {filename optional}
# OR
npm run test-local-android
# OR
yarn test-local-android
```

### Command Options:
- **For Android in emulator or real device:**
  ```bash
  npx wdio config/local.android.conf.js
  # OR
  npm run test-local-android
  # OR
  yarn test-local-android
  ```
- **For iOS:**
  ```bash
  npm run test-local-ios
  # OR
  yarn test-local-ios
  ```
- **For LambdaTest Android:**
  ```bash
  npm run single-lt-android
  # OR
  yarn single-lt-android
  ```
- **For LambdaTest iOS:**
  ```bash
  npm run single-lt-ios
  # OR
  yarn single-lt-ios
  ```

### Available Commands:
- `"test"`: Run all tests
- `"test-android-lt"`: Run all Android scripts on LambdaTest
- `"test-ios-lt"`: Run all iOS scripts on LambdaTest
- `"single-lt-android"`: Run single device LambdaTest Android tests
- `"single-lt-ios"`: Run single device LambdaTest iOS tests
- `"parallel-lt-android"`: Run multi-device LambdaTest Android tests
- `"parallel-lt-ios"`: Run multi-device LambdaTest iOS tests
- `"test-local-android"`: Run local or emulator Android tests
- `"test-local-ios"`: Run local or emulator iOS tests

### 11. For LambdaTest
- Upload the app and add the LambdaTest app link to the `.env` file.
- Update the device capabilities in the configuration file as per the remote device of LambdaTest.
- Add LambdaTest login/access credentials in the `.env` file.

## Known Issues
- Run each command from inside the Automation folder.
- Keep separate command prompts running for the Appium server (Appium Inspector).
- Run the project from the automation folder.
- Update packages if any config/installation file changes with `npm update`.
- APPIUM 2 latest version have some compatible issues with older version of plugins - so installation errors are common. But it will work with warning. ( best approave is to update plugins as well)

For any support, feel free to reach me - Anand from the QA Team.

---