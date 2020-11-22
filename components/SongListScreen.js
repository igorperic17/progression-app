import React from 'react';
import { View, FlatList, Button, StyleSheet, TouchableHighlight, Image } from 'react-native';

import SongListScreenCell from './SongListScreenCell'
import LogoImage from './LogoImage'
import BottomBarNavigation from './BottomBarNavigation'

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';

// STATIC DATA
// import chords from '../data/chords.json'

class SongListScreen extends React.Component {

    constructor() {
        super();
        this.state = { };
        this.getRemoteData();
    }

    // DYNAMIC DATA
    getRemoteData = () => {


        const client = new ApolloClient({
          uri: 'http://localhost:3000/graphql',
          cache: new InMemoryCache()
        });

        client.query({
            query: gql`
            query {
                songs {
                    id
                    title
                    artist
                    chords
                    progression
                }
            }
            `
        })
        .then(result => {
            this.setState({
                chords: result.data.songs
            });
            console.log(result);
        });
    };
    
    
    render() {
        return (
            <>
            <View style={styles.container}>
                <LogoImage></LogoImage>
                <FlatList style={[styles.list, this.props.style]} 
                data={this.state.chords}
                renderItem={ (listItem) => {
                return (
                    <SongListScreenCell item={listItem.item} 
                        onPress={() => { 
                            this.props.navigation.navigate("SongScreen", 
                            { songObject: listItem.item })}} />
                )}
                }
                ></FlatList>
                

                {/* <View style={styles.bottomBar}>
                    <TouchableHighlight onPress={ () => { console.log('Add song pressed!') }}>
                        <Image style={styles.bottomBarButton} source={require('../media/add-button.png')}></Image>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <Image style={styles.bottomBarButton} source={require('../media/filter-button.png')}></Image>
                    </TouchableHighlight>
                </View> */}
            </View>
            <View style={styles.bottomBarContainer}>
                <BottomBarNavigation style={styles.bottomBar}></BottomBarNavigation>
            </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        position: 'absolute',
        zIndex: 0
    },
    list: {
      flex: 1,
      width: '90%',
      flexDirection: 'column',
    //   borderRadius: 25,
    //   borderColor: 'rgba(0,100,200,0.7)',
    //   borderWidth: 2,
      backgroundColor: 'white',
      height: '100%',
      zIndex: 1
    },
    bottomBarContainer: {
        flex: 1,
        flexDirection: 'column',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        // height: 60,
        bottom: 40,
        zIndex: 2,
        // paddingBottom: 20,
        // backgroundColor: 'red',
        width: '100%'
    },
    bottomBar: {
        // height: 60,
        // zIndex: 3,
    }
  });

export { SongListScreen };