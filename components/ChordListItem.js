import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ChordListItem({ item, onPress }) {
    return (
        <TouchableOpacity key={ item.id } style={styles.container} onPress={onPress}>
            <Text style={styles.songTitle}>{item.title}</Text>
            <Text style={styles.artistName}>{item.artist}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 10,
        backgroundColor: 'rgba(0,100,200,.3)',
        borderColor: 'rgba(0,100,200,.7)',
        borderRadius: 25,
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