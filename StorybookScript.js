#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const PROJECT_PATH = process.cwd();
const projectName = path.basename(process.cwd())
const STORYBOOK_ROOT_PATH = `${PROJECT_PATH}/${projectName}`;
const STORYBOOK_DIRECTORY = `${STORYBOOK_ROOT_PATH}/storybook`;
const STORY_DIRECTORY = `${STORYBOOK_ROOT_PATH}/storybook/stories`;
const BUTTON_STORY_DIRECTORY = `${STORYBOOK_ROOT_PATH}/storybook/stories/Button`;
const BUTTON_COMPONENT = `${STORYBOOK_ROOT_PATH}/storybook/stories/Button/Button.js`;
const BUTTON_COMPONENT_STORIES = `${STORYBOOK_ROOT_PATH}/storybook/stories/Button/Button.stories.js`;
const STORY_INDEX_DIRECTORY = `${STORYBOOK_ROOT_PATH}/storybook/stories/index.js`;
const STORYBOOK_INDEX_FILE = `${STORYBOOK_ROOT_PATH}/storybook/index.js`;
const STORYBOOK_MAIN_FILE = `${STORYBOOK_ROOT_PATH}/storybook/main.js`;
const STORYBOOK_PREVIEW_FILE = `${STORYBOOK_ROOT_PATH}/storybook/preview.js`;
const STORYBOOK_REQUIRE_FILE = `${STORYBOOK_ROOT_PATH}/storybook/storybook.requires.js`;
const STORYBOOK_STORY_LOADER_FILE = `${STORYBOOK_ROOT_PATH}/storybook/storyLoader.js`;
const METRO_CONFIG_FILE = `${STORYBOOK_ROOT_PATH}/metro.config.js`;
const APP_INDEX_FILE = `${STORYBOOK_ROOT_PATH}/index.tsx`;


function writeFileAtPath(path, fileData ,fileName) {
    fs.writeFile(path, fileData, 'utf8', function(err) {
      if (err) {
        return console.log(err);
      }
      console.log(`The ${fileName} file was saved!`);
    });
  }
  

const ButtonContent = `import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const MyButton = ({ onPress, text }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'purple',
    borderRadius: 8,
  },
  text: { color: 'white' },
});`


const ButtonStoriesContent = `import React from 'react';
import { View } from 'react-native';
import { MyButton } from './Button';

const MyButtonMeta = {
  title: 'MyButton',
  component: MyButton,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    text: 'Hello world',
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyButtonMeta;

export const Basic = {};

export const AnotherExample = {
  args: {
    text: 'Another example',
  },
};`

const StoryBookInexContent = `import { getStorybookUI, configure } from '@storybook/react-native';
import {loadStories} from './storyLoader';

// import './storybook.requires';

configure(() => {
    loadStories();
  }, module);

const StorybookUIRoot = getStorybookUI({});

export default StorybookUIRoot;`

const StroyBookMainContent = `module.exports = {
    stories: ['./stories/**/*.stories.?(ts|tsx|js|jsx)'],
    addons: ['@storybook/addon-ondevice-controls', '@storybook/addon-ondevice-actions'],
  };`


const StroyPreviewContent = `export const parameters = {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  };`


  const StoryBookRequireJsContent = `/* do not change this file, it is auto generated by storybook. */

  import {
    configure,
    addDecorator,
    addParameters,
    addArgsEnhancer,
    clearDecorators,
  } from "@storybook/react-native";
  
  global.STORIES = [
    {
      titlePrefix: "",
      directory: "./.storybook/stories",
      files: "**/*.stories.?(ts|tsx|js|jsx)",
      importPathMatcher:
        "^\\.[\\\\/](?:\\.storybook\\/stories(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(?:ts|tsx|js|jsx)?)$",
    },
  ];
  
  import "@storybook/addon-ondevice-controls/register";
  import "@storybook/addon-ondevice-actions/register";
  
  import { argsEnhancers } from "@storybook/addon-actions/dist/modern/preset/addArgs";
  
  import { decorators, parameters } from "./preview";
  
  if (decorators) {
    if (__DEV__) {
      // stops the warning from showing on every HMR
    }
    // workaround for global decorators getting infinitely applied on HMR, see https://github.com/storybookjs/react-native/issues/185
    clearDecorators();
    decorators.forEach((decorator) => addDecorator(decorator));
  }
  
  if (parameters) {
    addParameters(parameters);
  }
  
  try {
    argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
  } catch {}
  
  const getStories = () => {
    return {
      "./.storybook/stories/Button/Button.stories.js": require("./stories/Button/Button.stories.js"),
    };
  };
  
  configure(getStories, module, false);`

  const StoryLoaderContent = `function loadStories() {
    require('./stories/Button/Button.stories');
  }
  
  const stories = [
    './stories/Button/Button.stories',
  ];
  
  module.exports = {
    loadStories,
    stories,
  };`

  const MetroConfigContent = `module.exports = {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
    },
    resolver: {
      resolverMainFields: ['sbmodern', 'react-native', 'browser', 'main'],
    },
  };`

const AppIndexJsFileContent = `import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';

import App from './App';
import {name as appName} from './app.json';

let AppEntryPoint = App;

// if (Constants.expoConfig.extra.storybookEnabled === 'true') {
AppEntryPoint = require('./storybook').default;
// }

AppRegistry.registerComponent(appName, () => AppEntryPoint);`

function createStoryBookConfiguration(){
    fs.mkdirSync(STORYBOOK_DIRECTORY)
    fs.mkdirSync(STORY_DIRECTORY)
    fs.mkdirSync(BUTTON_STORY_DIRECTORY)
    writeFileAtPath(BUTTON_COMPONENT, ButtonContent, "Button");
    
    writeFileAtPath(BUTTON_COMPONENT_STORIES, ButtonStoriesContent, "ButtonStories");
    writeFileAtPath(STORY_INDEX_DIRECTORY, `import './Button/Button.stories';`, "ButtonStoriesIndex");
    
    
    writeFileAtPath(STORYBOOK_INDEX_FILE, StoryBookInexContent, "StoryBookIndexFile");
    writeFileAtPath(STORYBOOK_MAIN_FILE, StroyBookMainContent, "StroyBookMainFile");
    writeFileAtPath(STORYBOOK_PREVIEW_FILE, StroyPreviewContent, "StroyPreviewFile");
    writeFileAtPath(STORYBOOK_REQUIRE_FILE, StoryBookRequireJsContent, "StoryBookRequireJsFile");
    writeFileAtPath(STORYBOOK_STORY_LOADER_FILE, StoryLoaderContent, "StoryLoaderFile");   
    writeFileAtPath(METRO_CONFIG_FILE, MetroConfigContent, "MetroConfigFile");  
    writeFileAtPath(APP_INDEX_FILE, AppIndexJsFileContent, "AppIndexJsFile");    
  
 
}


module.exports = {
  createStoryBookConfiguration,
};