import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers/index';
import {StyleSheet, Text, View, Image} from 'react-native/Libraries/react-native/react-native-implementation';
import LaunchesList from './LaunchesList';

type Props = {};

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

        this.store = createStore(rootReducer);
    }

    _onItemPress(item) {
        const { navigate } = this.props.navigation;

        console.log('item pressed', item);
        this.setState({
            image: {uri: item.image},
        });

        navigate('Details', { model: item });
    }

    render() {
        return (
            <Provider store={this.store}>
                <View style={styles.container}>
                    <LaunchesList onItemPress={this._onItemPress}/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});