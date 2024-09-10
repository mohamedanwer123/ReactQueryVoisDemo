import React from 'react';
import RootNavigation from './src/navigatios';
import {QueryClientProvider} from '@tanstack/react-query';
import queryClient from './src/configs/reactQuery/ReactQueryConfig';

if (__DEV__) {
  require('./src/configs/ReactotronConfig');
}

const App = (): React.JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <RootNavigation />
    </QueryClientProvider>
  );
};

export default App;
