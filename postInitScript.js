#!/usr/bin/env node
const ora = require('ora');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const PROJECT_PATH = process.cwd();
const projectName = path.basename(process.cwd())

const { AppFileWithCodePush, AppFileWithOutCodePush, WelcomeScreenContent, codPushJavaFunction, codePushSettingGradle } = require(`${PROJECT_PATH}/${projectName}/src/CodeSnippet/CodeSnippet`);
const { createStoryBookConfiguration } = require('./StorybookScript');

const APP_FILE_PATH = `${PROJECT_PATH}/${projectName}/App.tsx`;
const SIGN_UP_SCREEN_DIRECTORY = `${PROJECT_PATH}/${projectName}/src/screens/SignUp`;
const SIGN_IN_SCREEN_DIRECTORY = `${PROJECT_PATH}/${projectName}/src/screens/SignIn`;
const WELCOME_SCREEN_DIRECTORY = `${PROJECT_PATH}/${projectName}/src/screens/Welcome`;
const WELCOME_SCREEN = `${PROJECT_PATH}/${projectName}/src/screens/Welcome/index.tsx`;

const SIGN_IN_TEST_SCREEN = `${PROJECT_PATH}/${projectName}/tests/snapshot/Signup.snap.spec.js`;
const SIGN_UP_TEST_SCREEN = `${PROJECT_PATH}/${projectName}/tests/snapshot/SignIn.snap.spec.js`;
const SIGN_UP_TEST_SCREEN_SNAPSHOT = `${PROJECT_PATH}/${projectName}/tests/snapshot/__snapshots__/Signup.snap.spec.js.snap`;
const SIGN_IN_TEST_SCREEN_SNAPSHOT = `${PROJECT_PATH}/${projectName}/tests/snapshot/__snapshots__/SignIn.snap.spec.js.snap`;
const NAVIGATION_FILE = `${PROJECT_PATH}/${projectName}/src/navigation/index.tsx`;

const PACKAGE_JSON_PATH = `${PROJECT_PATH}/${projectName}/package.json`;
const PLIST_PATH = `${PROJECT_PATH}/${projectName}/ios/${projectName}/info.plist`;
const APP_DELEGATE_PATH = `${PROJECT_PATH}/${projectName}/ios/${projectName}/AppDelegate.mm`;
const STRING_XML_PATH = `${PROJECT_PATH}/${projectName}/android/app/src/main/res/values/strings.xml`;
const BUILD_GRADLE = `${PROJECT_PATH}/${projectName}/android/app/build.gradle`;
const SETTING_GRADLE = `${PROJECT_PATH}/${projectName}/android/settings.gradle`;

const JAVA_FILE_PATH = `${PROJECT_PATH}/${projectName}/android/app/src/main/java/com/${projectName}/MainApplication.kt`;
const CODE_SNIPPET_PATH = `${PROJECT_PATH}/${projectName}/src/CodeSnippet`;

function writeFileAtPath(path, fileData ,fileName, spinner) {
  fs.writeFile(path, fileData, 'utf8', function(err) {
    if(spinner) {
      spinner.stop();
      spinner.clear();
    }
    if (err) {
      return console.log(err);
    }
    console.log(`The ${fileName} file was saved!`);
  });
}
function updateFileData(path, stringData, fileName) {
  const spinner = ora(`Updating ${fileName}`).start();
  let fileData = fs.readFileSync(path, { encoding: 'utf8' });
  for (key in stringData) {
    fileData = fileData.replace(key, stringData[key]);
  }
  writeFileAtPath(path, fileData, fileName, spinner);
}

function removeDepedenciesFromPackageJson(path, dependenciesToRemoveArray) {
  let newPackageJson;
  try {
    const projectPackageJson = JSON.parse(fs.readFileSync(path, { encoding: 'utf8' }));
    const depedency = projectPackageJson.dependencies;
    for (const depedencyName of dependenciesToRemoveArray) {
      delete depedency[depedencyName];
    }
    newPackageJson = {
      ...projectPackageJson,
      dependencies: {
        ...depedency,
      }
    };
    fs.writeFileSync(path, JSON.stringify(newPackageJson, null, 2));
  } catch (error) {
    throw new Error(`Unable to parse package.json: ${PACKAGE_JSON_PATH}`, error);
  }
}

function addDepedenciesToPackageJson(path, dependenciesToAdd) {
  let newPackageJson;
  try {
    const projectPackageJson = JSON.parse(fs.readFileSync(path, { encoding: 'utf8' }));
    const depedency = projectPackageJson.dependencies;
    newPackageJson = {
      ...projectPackageJson,
      dependencies: {
        ...depedency, ...dependenciesToAdd
      }
    };
    fs.writeFileSync(path, JSON.stringify(newPackageJson, null, 2));
  } catch (error) {
    throw new Error(`Unable to parse package.json: ${PACKAGE_JSON_PATH}`, error);
  }
}

function addDevDepedenciesToPackageJson(path, dependenciesToAdd) {
  let newPackageJson;
  try {
    const projectPackageJson = JSON.parse(fs.readFileSync(path, { encoding: 'utf8' }));
    const depedency = projectPackageJson.devDependencies;
    newPackageJson = {
      ...projectPackageJson,
      devDependencies: {
        ...depedency, ...dependenciesToAdd
      }
    };
    fs.writeFileSync(path, JSON.stringify(newPackageJson, null, 2));
  } catch (error) {
    throw new Error(`Unable to parse package.json: ${PACKAGE_JSON_PATH}`, error);
  }
}


const questions = [
  {
    type: 'confirm',
    name: 'Storybook',
    message: 'Do you want Storybook feature in your app?',
    default: false,
    transformer: (answer) => (answer ? '👍' : '👎'),
  },
    {
      type: 'confirm',
      name: 'CodePush',
      message: 'Do you want CodePush feature in your app?',
      default: false,
      transformer: (answer) => (answer ? '👍' : '👎'),
    },
    {
      type: 'confirm',
      name: 'Loginflow',
      message: 'Do you want Loginflow in your app?',
      default: false,
      transformer: (answer) => (answer ? '👍' : '👎'),
    },
  ];
  inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
    let content = ''
    if(answers.Storybook === true) {
      createStoryBookConfiguration();
      addDevDepedenciesToPackageJson(PACKAGE_JSON_PATH, {"@storybook/addon-actions": "^6.5.16",
      "@storybook/addon-controls": "^6.5.16",
      "@storybook/addon-ondevice-actions": "^6.5.4",
      "@storybook/addon-ondevice-controls": "^6.5.4",
      "@storybook/react-native": "^6.5.4",
      "react-dom": "18.0.0",
      "@react-native-community/datetimepicker": "^7.4.0",
      "@react-native-community/slider": "^4.4.2",
      "babel-loader": "^8.3.0"});
    }
    if(answers.CodePush === true) {
      content = AppFileWithCodePush;
      updateFileData(PLIST_PATH, {'<string>1</string>' : '<string>1</string> <key>CodePushDeploymentKey</key> <string>$(CODE_PUSH_DEPLOYMENT_KEY_IOS)</string>'}, "plist")
      updateFileData(STRING_XML_PATH, {'///code push key' : '<string moduleConfig="true" name="CodePushDeploymentKey">@string/CODE_PUSH_DEPLOYMENT_KEY_ANDROID</string>'}, "String XML")
      updateFileData(APP_DELEGATE_PATH, {'//codepush import':'#import <CodePush/CodePush.h', 'return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];' : 'return [CodePush bundleURL];'}, "Appdelegate")
      updateFileData(BUILD_GRADLE, {'// apply code push':'apply from: "../../node_modules/react-native-code-push/android/codepush.gradle"'}, "Build Gradle")
      updateFileData(JAVA_FILE_PATH, {'//codepush java import':'import com.microsoft.codepush.react.CodePush;', '//codepushfunction': codPushJavaFunction}, "Java")
      updateFileData(SETTING_GRADLE, {'//codepushSetting': codePushSettingGradle}, "SettingGradle")
      addDepedenciesToPackageJson(PACKAGE_JSON_PATH, {"react-native-code-push": "^7.1.0"});
    }else {
      content = AppFileWithOutCodePush;
      updateFileData(PLIST_PATH, {'<key>CodePushDeploymentKey</key>' : '', '<string>$(CODE_PUSH_DEPLOYMENT_KEY_IOS)</string>' : ''}, "plist")
      updateFileData(STRING_XML_PATH, {'///code push key' : ''}, "String XML")
      updateFileData(APP_DELEGATE_PATH, {'#import <CodePush/CodePush.h>':'', 'return [CodePush bundleURL];': 'return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"]'}, "Appdelegate")
      updateFileData(BUILD_GRADLE, {'apply from: "../../node_modules/react-native-code-push/android/codepush.gradle"': ''}, "Build Gradle")
      updateFileData(SETTING_GRADLE, {"include ':app', ':react-native-code-push'": '', "project(':react-native-code-push').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-code-push/android/app')": ''}, "SettingGradle")
    }   
  
    writeFileAtPath(APP_FILE_PATH, content, "App");
    if(answers.Loginflow === false) {
      fs.rmSync(SIGN_IN_SCREEN_DIRECTORY, { recursive: true, force: true });
      fs.rmSync(SIGN_UP_SCREEN_DIRECTORY, { recursive: true, force: true });
      fs.rmSync(SIGN_IN_TEST_SCREEN, { recursive: true, force: true });
      fs.rmSync(SIGN_UP_TEST_SCREEN, { recursive: true, force: true });
      fs.rmSync(SIGN_IN_TEST_SCREEN_SNAPSHOT, { recursive: true, force: true });
      fs.rmSync(SIGN_UP_TEST_SCREEN_SNAPSHOT, { recursive: true, force: true });
      fs.mkdirSync(WELCOME_SCREEN_DIRECTORY)
      let WelcomeScreenContentData = WelcomeScreenContent;
      WelcomeScreenContentData = WelcomeScreenContentData.replace('Welcome to', [`Welcome to ${projectName}`]);
      writeFileAtPath(WELCOME_SCREEN, WelcomeScreenContentData, "index");
      updateFileData(NAVIGATION_FILE, {[`import SignIn from '../screens/SignIn';`] :`import Welcome from '../screens/Welcome';`, [`import SignUp from '../screens/SignUp';`] :'', '<AuthStack.Screen name={SCREEN_NAMES.SignIn} component={SignIn} options={options} />':'<AuthStack.Screen name="Welcome" component={Welcome}/>', '<AuthStack.Screen name={SCREEN_NAMES.SignUp} component={SignUp} options={options} />': ''}, "Build Gradle")

    }
     fs.rmSync(CODE_SNIPPET_PATH, { recursive: true, force: true });

  });

  