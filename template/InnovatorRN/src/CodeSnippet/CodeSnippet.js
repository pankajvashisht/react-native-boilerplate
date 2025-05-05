const AppFileWithCodePush = `import * as React from 'react';
import codePush from 'react-native-code-push';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import Navigation from './src/navigation';
import {navigationRef} from './src/navigation/root';
import ErrorBoundary from './src/components/ErrorBoundary';
import ErrorWithRestartBtn from './src/components/ErrorWithRestartBtn';
import {LangProvider, UserProvider} from 'context';
import ThemeProvider from 'theme/ThemeProvider';
import {MenuProvider} from 'react-native-popup-menu';

const queryClient = new QueryClient();

function App() {
  const handleError = () => {
    // log the error
  };
  return (
    <MenuProvider>
      <ThemeProvider>
        <ErrorBoundary onError={handleError} FallbackComponent={ErrorWithRestartBtn}>
          <NavigationContainer onReady={RNBootSplash.hide} ref={navigationRef}>
            <QueryClientProvider client={queryClient}>
              <UserProvider>
                <LangProvider>
                  <Navigation />
                </LangProvider>
              </UserProvider>
            </QueryClientProvider>
          </NavigationContainer>
        </ErrorBoundary>
      </ThemeProvider>
    </MenuProvider>
  );
}

//Uncomment below two lines for OTA after adding env vars

// const codePushOptions = {checkFrequency: codePush.CheckFrequency.ON_APP_RESUME};
// App = codePush(codePushOptions)(App);

export default App;`;

const AppFileWithOutCodePush = `import * as React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import Navigation from './src/navigation';
import {navigationRef} from './src/navigation/root';
import ErrorBoundary from './src/components/ErrorBoundary';
import ErrorWithRestartBtn from './src/components/ErrorWithRestartBtn';
import {LangProvider, UserProvider} from 'context';
import ThemeProvider from 'theme/ThemeProvider';
import {MenuProvider} from 'react-native-popup-menu';

const queryClient = new QueryClient();

function App() {
  const handleError = () => {
    // log the error
  };
  return (
    <MenuProvider>
      <ThemeProvider>
        <ErrorBoundary onError={handleError} FallbackComponent={ErrorWithRestartBtn}>
          <NavigationContainer onReady={RNBootSplash.hide} ref={navigationRef}>
            <QueryClientProvider client={queryClient}>
              <UserProvider>
                <LangProvider>
                  <Navigation />
                </LangProvider>
              </UserProvider>
            </QueryClientProvider>
          </NavigationContainer>
        </ErrorBoundary>
      </ThemeProvider>
    </MenuProvider>
  );
}

//Uncomment below two lines for OTA after adding env vars

export default App;`;

const WelcomeScreenContent = `import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

const Welcome: React.FC<Props> = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.greeting}>Welcome to</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
  },
  greeting: {
    color: '#999',
    fontWeight: 'bold',
  },
});

export default Welcome;`;

const codPushJavaFunction = `@Override
protected String getJSBundleFile() {
    return CodePush.getJSBundleFile();
}`;

const codePushSettingGradle = `include ':app', ':react-native-code-push'
project(':react-native-code-push').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-code-push/android/app')
`;

module.exports = {
  AppFileWithCodePush,
  AppFileWithOutCodePush,
  WelcomeScreenContent,
  codPushJavaFunction,
  codePushSettingGradle,
};
