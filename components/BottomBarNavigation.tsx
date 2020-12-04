import React, { useEffect } from 'react';
import { Animated, View, Easing, Image, StyleSheet, TouchableHighlight } from 'react-native';
// import Animated from 'react-native-reanimated';
import BottomBarNavigationButton from './BottomBarNavigationButton'

import * as NavigationRoot from './NavigationRoot';

export default class BottomBarNavigation extends React.Component {

    constructor(props) {
        super(props);
        this.highlightCircleRef = React.createRef();
        this.highlightPosition = new Animated.Value(0)
        this.state = {
            currentIndex: -1
        }
    }

    navigationButtonPressed(index) {
        if (index === this.state.currentIndex) return;
        this.setState({ currentIndex: index });

        // delegate the call to the screen
        this.props.delegate?.didPressNavigationButton(index);
    }

    componentDidUpdate(prevProps) {
        console.log("UPDATEEEE")
        // if (this.currentIndex !== prevProps.currentIndex) {
            this.onPageChange(this.state.currentIndex);
        // }
    }

    onPageChange(newPageIndex) {
        Animated.timing(this.highlightPosition, {
            toValue: (newPageIndex - 1) * 57,
            duration: 300,
            easing: Easing.bounce,
            useNativeDriver: true
        }).start();
    }

    componentDidMount() {
        // default screen is song list
        this.navigationButtonPressed(2);
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.View 
                        ref={this.highlightCircleRef} 
                        style={[ 
                            styles.highlightCircle, 
                            { 
                                transform: [
                                    {
                                        translateX: this.highlightPosition
                                    }
                                ]
                            }
                            ] 
                        }>
                </Animated.View>
                    
                <View style={[styles.navigationBar, this.props.style]}> 
                    <BottomBarNavigationButton index="1" text='' image={require('../assets/navbar-play.png')} delegate={this}/>
                    <BottomBarNavigationButton index="2" text='' image={require('../assets/navbar-edit.png')} delegate={this}/>
                    <BottomBarNavigationButton index="3" text='' image={require('../assets/navbar-list.png')} delegate={this}/>
                    <BottomBarNavigationButton index="4" text='' image={require('../assets/navbar-settings.png')} delegate={this}/>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    navigationBar: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#081018',
        opacity: .7,
        height: 60,
        // width: 236,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    highlightCircle: {
        position: 'absolute',
        borderRadius: 30,
        backgroundColor: 'rgba(0,0,0,.3)',
        height: 50,
        width: 50,
        margin: 5,
        left: 0,
        bottom: 0,
        top: 0,
        right: 0,
        zIndex: 2
    }
});