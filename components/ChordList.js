import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

import ChordListItem from '../components/ChordListItem'

import chords from '../data/chords.json'

class ChordList extends React.Component {
    render() {
        console
        return (
            <FlatList style={[styles.container, this.props.style]} 
            data={chords}
            renderItem={ChordListItem}
            ></FlatList>
        )
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 20,
      flexDirection: 'column',
      borderRadius: 20,
      borderColor: 'black',
      borderWidth: 1,
    },
  });

export { ChordList };