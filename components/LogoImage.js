import React from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';

export default function LogoImage({ route }) {
    return (
        <View style={styles.container}>
            <Image source={require('../media/logo.png')} style={styles.logo}></Image>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    logo: {
        resizeMode: 'contain',
        width: 300,
        height: 80
    }
})
