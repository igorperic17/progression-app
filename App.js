import React, { Component, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SongListScreen } from './components/SongListScreen';
import { SongScreen } from './components/SongScreen';
import HomeScreen from './components/LogoImage';
import BottomBarNavigation from './components/BottomBarNavigation';

// import { song } from '../progression-backend/src/models/song.ts';

import { navigationRef, isReadyRef } from './components/NavigationRoot';
import * as NavigationRoot from './components/NavigationRoot';

const { Navigator, Screen } = createStackNavigator();

export default class App extends Component {

  constructor(props) {
    super(props);
    this.currentSong = {
      title: 'Test',
      chords: 'test',
      progression: 'A,B,C',
      artist: 'igor'
    };
    isReadyRef.current = false;
  };

  didPressNavigationButton(index) {

    // skip navigation if it is not mounted already
    if (!navigationRef.current || !isReadyRef.current) return;

    if (index == 1) {
      navigationRef.current?.navigate('SongScreen', { songObject: this.currentSong } );
    } else if (index == 2) {
      navigationRef.current?.navigate('AddSongScreen');
    } else if (index == 3) {
      navigationRef.current?.navigate('SongListScreen');
    } else if (index == 4) {
        // TODO: add settings screen
    }
  }

  render() {
    return (
      <>
      {/* <NavigationContainer ref={ (nav) => this.setNavigationRef(nav) }> */}
      <NavigationContainer ref={ navigationRef } onReady={ () => isReadyRef.current = true }>
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

