import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ChordListItem({ item }) {
    return (
        <View style={styles.container}>
            <Text style={styles.songTitle}>{item.song}</Text>
            <Text style={styles.artistName}>{item.artist}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 10,
        backgroundColor: 'rgba(0,100,0,.3)',
        borderColor: 'rgba(0,100,0,.7)',
        borderRadius: 10,
        borderWidth: 2
    },
    songTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 5
    },
    artistName: {
        fontSize: 14,
        marginBottom: 5
    }
})