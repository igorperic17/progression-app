import React from 'react';
import { View, Image, Button, StyleSheet, TouchableHighlight, Text, TextInput } from 'react-native';

import LogoImage from './LogoImage'
import SongListScreenCell from './SongListScreenCell'

import Song from '../data/Song';
import { navigationRef } from './NavigationRoot';

import { GlobalColors } from '../styles/global.styles'
import { LinearGradient } from 'expo-linear-gradient'

class AddSongScreen extends React.Component {

    constructor({ navigator }) {
        super();
        this.state = { 
            song: new Song({id: '1', title: '-', artist: '-', chords: '-', progression: ''})
        };
        // this.getRemoteData();

        this.navigator = navigator
    }

    onCancelPress() {
        console.log("CANCEL PRESSED");
        this.navigator.goBack();
    }

    onOKPress() {
        console.log("OK PRESSED")
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
                    { height: 250, textAlign: 'center', textAlignVertical: 'top'}]}
                    onChangeText={ (text) => this.setState({ song: { ...this.state.song, chords: text }})}>
                        {this.state.song.chords}
                    </TextInput>

                <View style={styles.buttonRow}>
                    {/* cancel button */}
                    <TouchableHighlight style={[ styles.button, {left: 0} ]} onPress={this.onCancelPress}>
                        <LinearGradient colors={['#EC8D40', '#D5541E']} style={styles.button}>
                            <Image source={require('../assets/button-x.png')} style={styles.buttonImage}></Image>
                        </LinearGradient>
                    </TouchableHighlight>

                    {/* cancel button */}
                    <TouchableHighlight style={[ styles.button, {right: 0} ]} onPress={this.onOKPress}>
                        <LinearGradient colors={[GlobalColors.darkBlue, GlobalColors.darkBlue]} style={styles.button}>
                            <Image source={require('../assets/button-tick.png')} style={styles.buttonImage}></Image>
                        </LinearGradient>
                    </TouchableHighlight>
                </View>
            </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        marginTop: 15,
        color: GlobalColors.lightBlue,
        fontWeight: 'bold'
    },
    inputField: {
        // flex: 1,
        textAlign: 'center',
        width: '90%',
        height: 60,
        borderColor: GlobalColors.lightBlue,
        borderRadius: 20,
        borderWidth: 2,
        marginLeft: 10,
        marginRight: 10,
        height: 40,
        fontWeight: 'bold',
        color: GlobalColors.darkBlue
    },
    buttonRow: {
        // flex: 1,
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    button: {
        position: 'absolute',
        top: 0,
        width: 60,
        height: 40,
        borderRadius: 20,
        // borderWidth: 1,
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignContent: 'center',
    },
    buttonImage: {
        alignSelf: 'center'
    }
  });

export { AddSongScreen };