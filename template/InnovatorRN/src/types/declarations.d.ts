declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';

  const content: React.FC<SvgProps>;
  export default content;
}

declare module 'react-native-config' {
  export interface NativeConfig {
    IS_PRODUCTION: boolean;
    API_BASE_URL: string;
    MIXPANEL_KEY: string;
    CODE_PUSH_DEPLOYMENT_KEY_IOS: string;
    CODE_PUSH_DEPLOYMENT_KEY_ANDROID: string;
  }
  export const Config: NativeConfig;
  export default Config;
}

declare type voidFn = () => void;
