import React from 'react';
import RNErrorBoundary, {ErrorBoundaryProps} from 'react-native-error-boundary';

function ErrorBoundary({children, onError, FallbackComponent}: ErrorBoundaryProps) {
  return (
    <RNErrorBoundary onError={onError} FallbackComponent={FallbackComponent}>
      {children}
    </RNErrorBoundary>
  );
}

export default ErrorBoundary;
