import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Maps from '../screens/Maps';
import qrCode from '../screens/qrCode';
import crasandAnalytic from '../screens/crasandAnalytics';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Icon from 'react-native-vector-icons';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName={'Login'}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Maps" component={Maps} />
      <Stack.Screen name="qrCode" component={qrCode} />
    </Stack.Navigator>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator screenOtions={{headerShown: false}}>
      <Tab.Screen
        options={{
          tabBarLabel: ({focused, color}) => (
            <Text style={{color: focused ? 'black' : 'blue'}}>Gmaps</Text>
          ),
          tabBarIcon: ({focused, color}) => (
            <Icon name="place" size={24} color={focused ? 'red' : 'black'} />
          ),
        }}
        name="Maps"
        component={Maps}
      />
      <Tab.Screen
        options={{
          tabBarLabel: ({focused, color}) => (
            <Text style={{color: focused ? 'black' : 'blue'}}>Qr Code</Text>
          ),
          tabBarIcon: ({focused, color}) => (
            <Icon name="qr-code" size={24} color={focused ? 'red' : 'black'} />
          ),
        }}
        name="qrCode"
        component={qrCode}
      />
      <Tab.Screen
        options={{
          tabBarLabel: ({focused, color}) => (
            <Text style={{color: focused ? 'black' : 'blue'}}>CA Test</Text>
          ),
          tabBarIcon: ({focused, color}) => (
            <Icon name="qr-code" size={24} color={focused ? 'red' : 'black'} />
          ),
        }}
        name="crasandAnalytic"
        component={crasandAnalytic}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
