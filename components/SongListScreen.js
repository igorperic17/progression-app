import React from 'react';
import { View, FlatList, Button, StyleSheet, TouchableHighlight, Image } from 'react-native';

import SongListScreenCell from './SongListScreenCell'
import LogoImage from './LogoImage'

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';

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
    }
  });

export { SongListScreen };