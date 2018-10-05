import React, {Component} from 'react';
import {StyleSheet, View, Image, Button} from 'react-native/Libraries/react-native/react-native-implementation';
import {addFavourite} from '../actions/index'
import { connect } from "react-redux";

type Props = {};

const NAV_PARAM_MODEL = 'model';

export default class DetailsPage extends Component<Props> {
    static navigationOptions = ({ navigation }) => {
        return {
            title: `Launch details: ${navigation.getParam(NAV_PARAM_MODEL).title}`,
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
        const { navigation } = this.props;

        const model = navigation.getParam(NAV_PARAM_MODEL);
        console.warn('addToFavs', model);
        //TODO fix this
        // this.props.dispatch(addFavourite(model.key));
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Image
                    style={styles.detail}
                    source={{uri: navigation.getParam(NAV_PARAM_MODEL).image}}
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

// export default connect(state => state)(DetailsPage);
