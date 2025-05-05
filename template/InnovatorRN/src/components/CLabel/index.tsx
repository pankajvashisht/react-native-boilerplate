import React from 'react';
import {Text, TextProps} from 'react-native';
import {setTestIdentifier} from '../../utilities/misc';

type ICLabel = TextProps;

function CLabel({children, style, testID, ...props}: ICLabel) {
  return (
    <Text {...(testID && setTestIdentifier(testID))} style={style} {...props}>
      {children}
    </Text>
  );
}

export default CLabel;
