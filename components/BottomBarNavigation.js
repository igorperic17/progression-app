import React, { useEffect } from 'react';
import { Animated, View, Easing, Image, StyleSheet, TouchableHighlight } from 'react-native';
// import Animated from 'react-native-reanimated';
import BottomBarNavigationButton from './BottomBarNavigationButton'

export default class BottomBarNavigation extends React.Component {

    constructor(props) {
        super(props);
        this.highlightCircleRef = React.createRef();
        this.state = {
            highlightPosition: new Animated.Value(0)
        };
    }
    navigationButtonPressed(index) {
        this.selectedButton = index;
        Animated.timing(this.state.highlightPosition, {
            toValue: (index - 1) * 57,
            duration: 300,
            easing: Easing.bounce,
            useNativeDriver: true
        }).start();

        // delegate the call to the screen
        this.props.delegate.didPressNavigationButton(index);
    }

    componentDidMount() {
        // default screen is song list
        this.navigationButtonPressed(3);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.navigationBar, this.props.style]}> 
                    <BottomBarNavigationButton index="1" text='Play' delegate={this}/>
                    <BottomBarNavigationButton index="2" text='Add' delegate={this}/>
                    <BottomBarNavigationButton index="3" text='List' delegate={this}/>
                    <BottomBarNavigationButton index="4" text='Sett' delegate={this}/>
                </View>

                <Animated.View 
                    ref={this.highlightCircleRef} 
                    style={[ 
                        styles.highlightCircle, 
                        { 
                            // marginLeft: this.highlightPosition
                            transform: [
                                {
                                    translateX: this.state.highlightPosition
                                }
                            ]
                        }
                        ] 
                        }>

                    </Animated.View>
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