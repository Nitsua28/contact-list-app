import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainPage from './pages/main-page';
import {createNativeStackNavigator} from '@react-navigation/native-stack/'
import {NavigationContainer} from '@react-navigation/native'
import { Provider } from 'react-redux'
import { RootStackParamList } from './types';
import ProfilePage from './pages/profile-page';
import CreatePage from './pages/create-page';
import {createStore} from '@reduxjs/toolkit'
import { ContactListReducer } from './reducers/contact-list-reducer';

const Stack = createNativeStackNavigator<RootStackParamList>();
const contactList = createStore(ContactListReducer)
export default function App() {
  return (
    <Provider store={contactList} >
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Main'>
          <Stack.Screen
            name = "Main"
            component={MainPage}/>
            <Stack.Screen
            name = "Create"
            component={CreatePage}/>
          <Stack.Screen
            name = "Profile"
            component={ProfilePage}/>
          
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


