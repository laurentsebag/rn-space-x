import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import { connect } from 'react-redux'
import LaunchesList from './LaunchesList';

type Props = {};

class HomeScreen extends Component<Props> {
    static navigationOptions = {
        title: 'SpaceX Launches',
    };

    constructor(props) {
        super(props);

        this._onItemPress = this._onItemPress.bind(this);
    }

    _onItemPress(model) {
        const {navigate} = this.props.navigation;
        navigate('Details', {model});
    }

    render() {
        return (
            <View style={styles.container}>
                <LaunchesList onItemPress={this._onItemPress}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});

export default connect()(HomeScreen)