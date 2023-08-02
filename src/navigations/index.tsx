import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen1 from '../screens/screen1';
// import Screen3 from '../screens/screen3';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen name="Screen1" component={Screen1} />
        {/* <Stack.Screen name="Screen3" component={Screen3} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
