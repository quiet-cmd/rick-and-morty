import { Suspense, lazy } from 'react';

const DynamicImport = ({ importFunc, fallback, ...props }) => {
  const Component = lazy(importFunc);

  return (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  );
};

export default DynamicImport;
