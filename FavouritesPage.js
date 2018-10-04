import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

type Props = {};

export default class FavouritesPage extends Component<Props> {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Favourites',
        };
    };

    constructor(props) {
        super(props);

        this.state = {
            placeholder: 'Add content to your favourites and come back.'
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.placeholder}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12
    }
});
