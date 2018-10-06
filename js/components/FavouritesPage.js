import React, {Component} from 'react';
import {connect} from 'react-redux'
import {FlatList, StyleSheet, Text, View} from 'react-native';
import LaunchListItem from "./LaunchListItem";
import LaunchesService from "../services/LaunchesService";
import LaunchesAdapter from "../adapters/LaunchesAdapter";

type Props = {};

class FavouritesPage extends Component<Props> {
    static navigationOptions = ({navigation}) => {
        return {
            title: 'Favourites',
        };
    };

    constructor(props) {
        super(props);

        this.state = {
            placeholder: 'Add content to your favourites and come back.',
            list: [],
            containerStyle: {
                justifyContent: 'center',
                alignItems: 'center'
            }
        };

        this._onItemPress = this._onItemPress.bind(this);
    }

    _onItemPress(model) {
        const {navigate} = this.props.navigation;
        navigate('Details', {model});
    }

    componentDidMount() {
        this.props.navigation.addListener('didFocus', this.didFocus.bind(this));
    }

    didFocus() {
        const launchesService = new LaunchesService();
        const launchesAdapter = new LaunchesAdapter();
        const favourites = this.props.favourites;
        
        launchesService.fetchData()
            .then(data => launchesAdapter.adapt(data))
            .then(data => data.filter(favourite => favourites.indexOf(favourite.key) !== -1))
            .then((data) => {
                this.setState({
                    list: data,
                    containerStyle: (data.length !== 0 ? {} : {
                        justifyContent: 'center',
                        alignItems: 'center'
                    })
                });
            });
    }

    renderContent() {
        if (this.props.favourites.length === 0) {
            return (
                <Text>{this.state.placeholder}</Text>
            );
        }

        return (
            <FlatList
                data={this.state.list}
                renderItem={({item}) => <LaunchListItem onItemPress={this._onItemPress} data={item}/>}
            />
        );
    }

    render() {
        return (
            <View style={{...styles.container, ...this.state.containerStyle}}>
                {this.renderContent()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

const mapStateToProps = (state) => ({
    favourites: state.favourites
});

export default connect(mapStateToProps)(FavouritesPage)