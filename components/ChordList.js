import React from 'react';
import { View, FlatList, Button, StyleSheet, TouchableHighlight, Image } from 'react-native';

import ChordListItem from '../components/ChordListItem'
import LogoImage from '../components/LogoImage'

// STATIC DATA
// import chords from '../data/chords.json'

class ChordList extends React.Component {

    constructor() {
        super();
        this.state = { };
        this.getRemoteData();
    }

    // DYNAMIC DATA
    getRemoteData = () => {
        const url = "http://localhost:3000/song";
        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.log(res);
            this.setState({
                chords: res
            });
            })
            .catch(error => {
            console.log("get data error from:" + url + " error:" + error);
            });
        };
    
    
    render() {
        return (
            <View style={styles.container}>
                <LogoImage></LogoImage>
                <FlatList style={[styles.list, this.props.style]} 
                data={this.state.chords}
                renderItem={ (listItem) => {
                return (
                    <ChordListItem item={listItem.item} 
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
        alignItems: 'center'
    },
    list: {
      flex: 1,
      width: '90%',
      flexDirection: 'column',
    //   borderRadius: 25,
    //   borderColor: 'rgba(0,100,200,0.7)',
    //   borderWidth: 2,
      backgroundColor: 'white',
    },
    bottomBar: {
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        // padding: 10
    },
    bottomBarButton: {
        height: 25,
        width: 150,
        resizeMode: 'contain',
        margin: 5
    }
  });

export { ChordList };