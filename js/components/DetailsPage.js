import React, {Component} from 'react';
import {Button, Image, StyleSheet, View} from 'react-native';
import {addFavourite, removeFavourite} from '../actions/index'
import {connect} from "react-redux";

type Props = {};

const NAV_PARAM_MODEL = 'model';

class DetailsPage extends Component<Props> {
    static navigationOptions = ({navigation}) => {
        return {
            title: `Launch details: ${navigation.getParam(NAV_PARAM_MODEL).title}`,
        };
    };

    constructor(props) {
        super(props);

        this.onFavouriteButtonPress = this.onFavouriteButtonPress.bind(this);
    }

    onFavouriteButtonPress() {
        const {navigation} = this.props;

        const model = navigation.getParam(NAV_PARAM_MODEL);
        if (!this.props.isFavourite) {
            this.props.dispatch(addFavourite(model.key));
        } else {
            this.props.dispatch(removeFavourite(model.key));
        }
    }

    render() {
        const {navigation} = this.props;

        return (
            <View style={styles.container}>
                <Image
                    style={styles.detail}
                    source={{uri: navigation.getParam(NAV_PARAM_MODEL).image}}
                />
                <Button
                    onPress={this.onFavouriteButtonPress}
                    title={this.props.isFavourite ? 'Remove from favourites' : 'Add to favourites'}
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


const mapStateToProps = (state, ownProps) => ({
    isFavourite: state.favourites.indexOf(ownProps.navigation.getParam(NAV_PARAM_MODEL).key) !== -1
});

export default connect(mapStateToProps)(DetailsPage);
