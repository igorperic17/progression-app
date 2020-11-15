import React from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';

export default function LogoImage({ route }) {
    return (
        <View style={styles.container}>
            <Image source={require('../media/logo.png')} style={styles.logo}></Image>
            <View style={ styles.horizontalLine }></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginTop: 40
    },
    logo: {
        resizeMode: 'contain',
        width: 300,
        height: 50
    },
    horizontalLine: {
        backgroundColor: '#3D79B4',
        width: '90%',
        height: 1,
        marginTop: 10,
    }
})
