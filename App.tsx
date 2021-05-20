import Route from '@navigation/Routes';
import React from 'react';

import {SafeAreaView} from 'react-native';

import {Provider} from 'react-redux';
import store from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <Route />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
