import React, {Component} from 'react';
import {StyleSheet, View, Image, Button} from 'react-native';

type Props = {};

export default class DetailsPage extends Component<Props> {
    static navigationOptions = ({ navigation }) => {
        return {
            title: `Launch details: ${navigation.getParam('title')}`,
        };
    };

    constructor(props) {
        super(props);

        this.state = {
            favouriteText: 'Add to favourites'
        };

        this.onFavouriteButtonPress = this.onFavouriteButtonPress.bind(this);
    }

    onFavouriteButtonPress() {
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Image
                    style={styles.detail}
                    source={{uri: navigation.getParam('image')}}
                />
                <Button
                    onPress={this.onFavouriteButtonPress}
                    title={this.state.favouriteText}
                    color="#3e2465"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12
    },
    detail: {
        flex: 1,
        padding: 12,
        resizeMode: 'contain'
    }
});
