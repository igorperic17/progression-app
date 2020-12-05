import React from 'react';
import { View, LayoutAnimation, StyleSheet, TouchableHighlight, Image, Text } from 'react-native';
import { SwipeListView, RowMap, SwipeRow } from 'react-native-swipe-list-view';

import SongListScreenCell from './SongListScreenCell'
import LogoImage from './LogoImage'

import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { gql } from '@apollo/client';
import Song from '../data/Song';

class SongListScreen extends React.Component {
    client: ApolloClient<NormalizedCacheObject>;

    constructor(props: any) {
        super(props);
        this.state = { chords: [] }
        this.client = new ApolloClient({
            uri: 'http://localhost:3000/graphql',
            cache: new InMemoryCache()
          });

        this.getRemoteData();  
    }

    // DYNAMIC DATA
    getRemoteData = () => {

        this.client.query({
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
            // console.log(result);
        });
    };

    closeRow = (rowMap: RowMap<SwipeRow<Song>>, rowKey: string) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    editRow(rowMap: RowMap<SwipeRow<Song>>, key: string) {
        console.log('Delete pressed on ');
        console.log(rowMap);
        console.log(key);
        console.log(rowMap[key]);
        this.closeRow(rowMap, key);
    };

    deleteRow(rowMap: RowMap<SwipeRow<Song>>, key: string) {
        console.log('Deleting song');
        console.log(this.state.chords[key]);

        const queryString = `
        mutation {
            deleteSong(id: "${key}")
        }`;
        console.log(queryString);

        this.client.mutate({
            mutation: gql`
            mutation {
                deleteSong(id: "${key}")
            }`
        }).then(result => {
            const newData = [...this.state.chords];
            const prevIndex = this.state.chords.findIndex(item => item.id === key);
            newData.splice(prevIndex, 1);
            this.setState({
                chords: newData
            });

            this.closeRow(key);
        });
    };

    renderHiddenItem = (data, rowMap) => (
        <View style={styles.rowBack}>
            <TouchableHighlight
                style={[styles.backRightBtn, styles.backRightBtnLeft]}
                onPress={() => this.editRow(rowMap, data.item.id)}
            >
                <Text style={styles.backTextWhite}>Edit</Text>
            </TouchableHighlight>
            <TouchableHighlight
                style={[styles.backRightBtn, styles.backRightBtnRight]}
                onPress={() => this.deleteRow(rowMap, data.item.id)}
            >
                <Text style={styles.backTextWhite}>Delete</Text>
            </TouchableHighlight>
        </View>
    );

    
    render() {
        return (
            <>
            <View style={styles.container}>
                <LogoImage></LogoImage>
                <SwipeListView style={[styles.list, this.props.style]}
                data={this.state.chords}
                renderItem={ (listItem) => {
                return (
                    <SongListScreenCell item={listItem.item} 
                        onPress={() => { 
                            this.props.navigation.navigate("SongScreen", 
                            { song: listItem.item })}} />
                )}}
                renderHiddenItem={this.renderHiddenItem}
                leftOpenValue={0}
                rightOpenValue={-150}
                ></SwipeListView>
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
    swipeButton: {
        // flex:
        width: 60,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignContent: 'center'
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnLeft: {
        backgroundColor: '#85D8A7',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: '#D88585',
        right: 0,
    },
    backTextWhite: {
        color: '#FFF',
    },
  });

export { SongListScreen };