import React from 'react';
import { View, FlatList, Button, StyleSheet, TouchableHighlight, Text, TextInput } from 'react-native';

import LogoImage from './LogoImage'
import SongListScreenCell from './SongListScreenCell'

import Song from '../data/Song';

class AddSongScreen extends React.Component {

    constructor() {
        super();
        this.state = { 
            song: new Song({id: '1', title: 'test1', artist: 'Igor', chords: 'AMAMAMAM', progression: 'Em,A,C,Hm'})
        };
        // this.getRemoteData();
    }
    
    render() {
        return (
            <>
            <View style={styles.container}>
                <LogoImage></LogoImage>
                <SongListScreenCell item={this.state.song} cellStyle={styles.headerCell}></SongListScreenCell>

                <Text style={styles.inputFieldLabel}>Song title</Text>
                <TextInput style={styles.inputField} 
                onChangeText={ (text) => this.setState({ song: { ...this.state.song, title: text }})}>
                    {this.state.song.title}</TextInput>

                <Text style={styles.inputFieldLabel}>Artist name</Text>
                <TextInput style={styles.inputField}
                onChangeText={ (text) => this.setState({ song: { ...this.state.song, artist: text }})}>
                    {this.state.song.artist}</TextInput>
               

                <Text style={styles.inputFieldLabel}>Chords</Text>
                <TextInput style={[styles.inputField, 
                    { height: 250, textAlign: 'center', textAlignVertical: 'top'}]}></TextInput>
            </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignSelf: 'center',
        backgroundColor: 'white',
        // height: '100%',
        width: '100%',
        position: 'relative',
        // backgroundColor: 'blue'
    },
    headerCell: {
        flex: 0,
        position: 'relative'
    },
    inputFieldLabel: {
        // flex: 1,
        width: '90%',
        textAlign: 'left',
        // height: 40,
        paddingLeft: 10,
        paddingBottom: 5,
        marginTop: 15
    },
    inputField: {
        // flex: 1,
        textAlign: 'center',
        width: '90%',
        height: 60,
        borderColor: 'black',
        borderRadius: 20,
        borderWidth: 1,
        marginLeft: 10,
        marginRight: 10,
        height: 40
    }
  });

export { AddSongScreen };