import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

import ChordListItem from '../components/ChordListItem'
import LogoImage from '../components/LogoImage'

import chords from '../data/chords.json'

class ChordList extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <LogoImage></LogoImage>
                <FlatList style={[styles.list, this.props.style]} 
                data={chords}
                renderItem={ (listItem) => {
                return (
                    <ChordListItem item={listItem.item} 
                        onPress={() => { 
                            this.props.navigation.navigate("SongScreen", 
                            { songObject: listItem.item })}} />
                )}
                }
                ></FlatList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-end',
        backgroundColor: 'white'
    },
    list: {
      flex: 1,
      margin: 20,
      flexDirection: 'column',
      borderRadius: 25,
      borderColor: 'rgba(0,100,200,0.7)',
      borderWidth: 2,
      backgroundColor: 'white'
    },
  });

export { ChordList };