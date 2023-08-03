/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Screen1 from './src/screens/screen1';
import Screen3 from './src/screens/screen3';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const League = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>League </Text>
  </View>
);

const Research = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Research</Text>
  </View>
);

const Leaderboard = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Leaderboard</Text>
  </View>
);

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Screen1') {
              iconName = 'home';
              color = focused ? 'blue' : 'grey';
              size = focused ? 25 : 20;
            } else if (route.name === 'Leagues') {
              iconName = 'trophy';
              color = focused ? 'blue' : 'grey';
              size = focused ? 25 : 20;
            } else if (route.name === 'Research') {
              iconName = 'search';
              color = focused ? 'blue' : 'grey';
              size = focused ? 25 : 20;
            } else if (route.name === 'Leaderboard') {
              iconName = 'chart-bar';
              color = focused ? 'blue' : 'grey';
              size = focused ? 25 : 20;
            } else if (route.name === 'Profile') {
              iconName = 'user';
              color = focused ? 'blue' : 'grey';
              size = focused ? 25 : 20;
            }

            return (
              <FontAwesome5Icon name={iconName} size={size} color={color} />
            );
          },
        })}
        screenOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'grey',
        }}>
        <Tab.Screen
          name="Home"
          component={Screen1}
          options={{headerShown: false}}
        />
        <Tab.Screen name="Leagues" component={League} />
        <Tab.Screen name="Research" component={Research} />
        <Tab.Screen name="Leaderboard" component={Leaderboard} />
        <Tab.Screen
          name="Profile"
          component={Screen3}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
