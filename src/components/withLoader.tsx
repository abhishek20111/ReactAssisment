// src/hoc/withLoader.tsx
import React from 'react';

const withLoader = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  return (props: P & { loading: boolean }) => {
    if (props.loading) {
      return <p>Loading...</p>;
    }
    return <WrappedComponent {...props} />;
  };
};

export default withLoader;
