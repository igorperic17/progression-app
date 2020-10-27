import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ChordList } from './components/ChordList';
import { SongScreen } from './components/SongScreen';
import HomeScreen from './components/HomeScreen';

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="HomeScreen" options={{title: 'Home'}} component={HomeScreen}></Screen>
        <Screen name="ChordList" options={{title: 'Song List'}} component={ChordList}></Screen>
        <Screen name="SongScreen" options={{title: 'Chords'}} component={SongScreen}></Screen>
      </Navigator>
    </NavigationContainer>
  );
}

