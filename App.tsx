/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Screen1 from './src/screens/screen1';
import Screen3 from './src/screens/screen3';

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

            // Define icons based on the route name
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home'; // Replace with appropriate icon names
            } else if (route.name === 'Leagues') {
              iconName = focused ? 'trophy' : 'trophy';
            } else if (route.name === 'Research') {
              iconName = focused ? 'search' : 'search';
            } else if (route.name === 'Leaderboard') {
              iconName = focused ? 'chart-bar' : 'chart-bar';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'user' : 'user';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
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
