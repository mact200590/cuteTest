import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ResumeScreen from '../screens/ResumeScreen';

const StackNavigator = createStackNavigator();

const RootNav = () => {
  return (
    <StackNavigator.Navigator initialRouteName="HomeScreenNav">
      <StackNavigator.Screen
        name="HomeScreenNav"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="ResumeScreenNav"
        component={ResumeScreen}
        options={{title: ''}}
      />
    </StackNavigator.Navigator>
  );
};

export default RootNav;
