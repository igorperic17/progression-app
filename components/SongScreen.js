import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default function SongScreen({ route }) {
    const { songObject } = route.params;
    return (
        <View style={styles.container}>
            <Text>Song {songObject.song}</Text>
            <Text>Artist {songObject.artist}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});