import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

export default function SongListScreenCell({ item, onPress }) {
    function getChordViews() {
        var a = item.progression;
        // console.log(a);
        if (a != null) {
            const chordProgression = a.split(',');
            const chordViews = chordProgression.map( (chord) => {
                return (
                <View key={chord} style={styles.chordBubbleContainer}>
                    <Text style={styles.chordBubbleText}>{chord}</Text>
                </View>
                );
            });
            return chordViews;
        };
        return null;
    }

    return (
        <TouchableOpacity key={ item.id } style={styles.container} onPress={onPress}>

            {/* chords - cell header */}
            <View style={styles.cellHeader}> 
            {
                getChordViews()
            }
            </View>

            {/* cell body */}
            <View style={styles.cell}> 
                <Text style={styles.songTitle}>{item.title}</Text>
                <Text style={styles.artistName}>{item.artist}</Text>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    cellHeader: {
        height: 30,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginLeft: 20,
        marginBottom: -30,
        zIndex: 1
    },
    chordBubbleContainer: {
        backgroundColor: 'white',
        height: 30,
        width: 30 ,
        borderColor: '#3D79B4',
        borderRadius: 25,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    chordBubbleText: {
        fontSize: 12,
        // fontFamily: 'PT Sans Narrow',
        color: '#3D79B4'
    },
    cell: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 10,
        borderColor: 'rgba(0,100,200,.7)',
        borderRadius: 25,
        borderWidth: 2,
        height: 75
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