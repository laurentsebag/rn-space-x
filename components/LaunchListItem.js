import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native/Libraries/react-native/react-native-implementation';

type Props = {};

export default class LaunchesList extends Component<Props> {
    constructor(props) {
        super(props);

        this._onPress = this._onPress.bind(this);
    }

    _onPress(item) {
        this.props.onItemPress(item);
    }

    render () {
        return (
            <TouchableOpacity style={styles.item} onPress={() => {this._onPress(this.props.data)}}>
                <Text>{this.props.data.title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        padding: 12,
        borderBottomWidth: 0.5,
        backgroundColor: '#e2f3ff'
    }
});



