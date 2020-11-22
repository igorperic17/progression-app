import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SongListScreen } from './components/SongListScreen';
import { SongScreen } from './components/SongScreen';
import HomeScreen from './components/LogoImage';
import BottomBarNavigation from './components/BottomBarNavigation'
import { render } from 'react-dom';

const { Navigator, Screen } = createStackNavigator();

export default class App extends Component {

  didPressNavigationButton(index) {
    console.log('BUTTON ' + String(index));
  }

  render() {
    return (
      <>
      <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false }}>
          {/* <Screen name="HomeScreen" options={{title: 'Home'}} component={HomeScreen}></Screen> */}
          <Screen name="SongListScreen" options={{title: 'Song List'}} component={SongListScreen}></Screen>
          <Screen name="SongScreen" options={{title: 'Chords'}} component={SongScreen}></Screen>
          <Screen name="AddSongScreen" options={{title: 'Add song'}} component={SongListScreen}></Screen>
        </Navigator>
      </NavigationContainer>

      <View style={styles.bottomBarContainer}>
      <BottomBarNavigation style={styles.bottomBar} delegate={this}></BottomBarNavigation>
      </View>
      </>
    )
  }
}


const styles = StyleSheet.create({
  bottomBarContainer: {
      flex: 1,
      flexDirection: 'column',
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      // height: 60,
      bottom: 40,
      zIndex: 2,
      // paddingBottom: 20,
      // backgroundColor: 'red',
      width: '100%'
  }
});

