import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import LaunchesList from './LaunchesList'

type Props = {};

/*
Review 3: React Native
======================
Download and unzip some assets from 'https://bit.ly/2DRdFGQ' (case sensitive)
In a new React Native App (or one you already have) create a view containig a FlatList showing some data from

'data/gallery/photos.json' (copied into App.js)
TIP: initially work with just a subset of about 12 data members
Make sure the data is available as state
Write a custom component which will display data for one of the photos
  e.g. gallery[0].desc etc.
When you are comfortable showing data for one member of the collection, implement a FlatList to show some data from
all of the data members.

(You will need to use 'map' to iterate and make sure you provide a 'key')
See https://facebook.github.io/react-native/docs/flatlist
Use a JS map
  this.state.gallery.map((prop, key) => {
         return (...)
  }

Optional
--------
Declare two views and place them both on screen, one above the other using FlexBox
Touching an item in the FlatList (in one component) shows the details in the other component
How can you show the actual images?
 */

export default class App extends Component<Props> {
    constructor(props) {
        super(props);

        this.state = {
            image: {uri: ''},
            styleDetail: {
            }
        };

        this._onItemPress = this._onItemPress.bind(this);
    }

    _onItemPress(item) {
        console.log('item pressed', item);
        this.setState({
            image: {uri: item.image},
            styleDetail: {flex: 1}
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>SpaceX Launches</Text>
                <View style={styles.content}>
                    <LaunchesList onItemPress={this._onItemPress}/>
                </View>
                <Image
                    style={{...styles.detail, ...this.state.styleDetail}}
                    source={this.state.image}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    header: {
        backgroundColor: '#141443',
        color: 'white',
        fontSize: 20,
        padding: 24
    },
    content: {
        flex: 1,
    },
    detail: {
        flex: 0,
        padding: 12,
        resizeMode: 'contain'
    }
});
