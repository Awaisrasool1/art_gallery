import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import NavigationStack from './src/navigation/stackNavigation/NavigationStack';

function App() {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  );
}

export default App;
