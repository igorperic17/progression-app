import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableHighlight, Image} from 'react-native'
import LogoImage from './LogoImage'
import { SongScreenProps } from './NavigationParamTypes'

function SongScreen({ route }: SongScreenProps ) {
    const songObject = route.params.song
    return (
        <View style={styles.container}>
            <Text style={styles.songTitle}>{songObject.title}</Text>
            <Text style={styles.artistName}>{songObject.artist}</Text>
            <LogoImage></LogoImage>
            <ScrollView style={styles.chordsScrollView}>
                <Text style={styles.chordsTextStyle}>{songObject.chords}</Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-evenly',
        padding: 10,
        // backgroundColor: 'rgba(0,100,200,0.05)',
        backgroundColor: 'white',
    },
    chordsScrollView: {
        flex: 1,
        alignContent: 'center',
        borderColor: 'rgba(0,100,200,0.7)',
        borderRadius: 30,
        backgroundColor: 'rgba(0,100,200,0.2)',
        borderWidth: 2,
        margin: 10,
        padding: 20,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    chordsTextStyle: {
        fontSize: 14,
        // fontWeight: 'bold'
    },
    songTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 5,
        textAlign: 'center'
    },
    artistName: {
        fontSize: 14,
        marginBottom: 5,
        textAlign: 'center'
    },
    bottomBar: {
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50
    },
    bottomBarButton: {
        height: 25,
        width: 150,
        resizeMode: 'contain',
        margin: 10
    }
});

export { SongScreen }