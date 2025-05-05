import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';

export const useDimension = () => {
  const [orientation, setOrientation] = useState();

  useEffect(() => {
    const updateOrientation = () => {
      setOrientation(
        Dimensions.get('window').height > Dimensions.get('window').width ? 'portrait' : 'landscape',
      );
    };
    const subscription = Dimensions.addEventListener('change', updateOrientation);
    return () => subscription?.remove();
  }, []);

  return orientation;
};
