import React, { Component, LegacyRef, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SongListScreen } from './components/SongListScreen';
import { AddSongScreen } from './components/AddSongScreen';
import { SongScreen } from './components/SongScreen';
import HomeScreen from './components/LogoImage';
import BottomBarNavigation from './components/BottomBarNavigation';

import { navigationRef, isReadyRef } from './components/NavigationRoot';
import * as NavigationRoot from './components/NavigationRoot';
import Song from './data/Song';
import { NavigationParamTypes } from './components/NavigationParamTypes';

const { Navigator, Screen } = createStackNavigator<NavigationParamTypes>();

export default class App extends Component {
  currentSong: Song;
  navBar: LegacyRef<BottomBarNavigation>;

  constructor(props: any) {
    super(props);
    this.currentSong = new Song( "1", 'Test',  'test', 'A,B,C', 'igor' );
    isReadyRef.current = false;
  };

  didPressNavigationButton(index: number) {

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
          <Screen name="AddSongScreen" options={{title: 'Add song'}} component={AddSongScreen}></Screen>
          <Screen name="SongListScreen" options={{title: 'Song List'}} component={SongListScreen}></Screen>
          <Screen name="SongScreen" options={{title: 'Chords'}} component={SongScreen}></Screen>
        </Navigator>
      </NavigationContainer>

        <View style={styles.bottomBarContainer}>
          <BottomBarNavigation ref={this.navBar} delegate={this} currentIndex={2}></BottomBarNavigation>
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

