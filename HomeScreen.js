import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import LaunchesList from './LaunchesList';

type Props = {};

/*
Review 3: React Native
======================
Download and unzip some assets from 'https://bit.ly/2DRdFGQ' (case sensitive)
In a new React Native App (or one you already have) create a view containig a FlatList showing some data from

'data/gallery/photos.json' (copied into HomeScreen.js)
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
Add react navigation
 */

export default class HomeScreen extends Component<Props> {
    static navigationOptions = {
        title: 'SpaceX Launches',
    };

    constructor(props) {
        super(props);

        this.state = {
            image: {uri: ''},
        };

        this._onItemPress = this._onItemPress.bind(this);
    }

    _onItemPress(item) {
        const { navigate } = this.props.navigation;

        console.log('item pressed', item);
        this.setState({
            image: {uri: item.image},
        });

        navigate('Details', item);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <LaunchesList onItemPress={this._onItemPress}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    content: {
        flex: 1,
    }
});
