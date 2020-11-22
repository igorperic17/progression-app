import React from 'react';
import { View, Image, TouchableHighlight, Text, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export default class BottomBarNavigationButton extends React.Component {

    render() {
        return (
            <TouchableHighlight 
                key={this.props.index} 
                style={[styles.contaner, this.props.style]} 
                onPress={() => this.props.delegate.navigationButtonPressed(this.props.index)}>
                {/* onPress={this.props.onPress}> */}
                <View>
                    <Text>{this.props.text}</Text>
                </View>
            </TouchableHighlight>
        );
    }
};

const styles = StyleSheet.create({
    contaner: {
        borderRadius: 30,
        backgroundColor: 'rgba(0,0,0,.1)',
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 4,
        marginRight: 4
    }
});