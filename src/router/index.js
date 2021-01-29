import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {BottomNavigation} from '../components';
import {Home, SignIn} from '../pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigation {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explore" component={Home} />
      <Tab.Screen name="Courses" component={Home} />
      <Tab.Screen name="Account" component={Home} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
