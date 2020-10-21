import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

import ChordListItem from '../components/ChordListItem'

import chords from '../data/chords.json'

class ChordList extends React.Component {
    render() {
        return (
            <FlatList style={[styles.container, this.props.style]} 
            data={chords}
            renderItem={ (listItem) => {
            return (
                <ChordListItem item={listItem.item} 
                    onPress={() => { this.props.navigation.navigate("SongScreen", { songObject: listItem.item })}} />
            )}
            }
            ></FlatList>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 20,
      flexDirection: 'column',
      borderRadius: 25,
      borderColor: 'black',
      borderWidth: 1,
    },
  });

export { ChordList };