import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import {FlatList} from 'react-native';
import LaunchesService from "./LaunchesService";
import LaunchListItem from "./LaunchListItem";

type Props = {};

export default class LaunchesList extends Component<Props> {
    constructor(props) {
        super(props);

        this.state = {
          list: []
        };

        this._onItemPress = this._onItemPress.bind(this);
    }

    componentDidMount() {
        const launchesService = new LaunchesService();
        launchesService.fetchData()
            .then((data) => {
                console.log('received: ', data);
                this.setState({
                    list: data.map((item) => {
                        return {
                            title: item.mission_name,
                            image: item.links && item.links.mission_patch
                        }
                    })
                })
            });
    }

    _onItemPress(item) {
        this.props.onItemPress(item);
    }

    render () {
        return <FlatList
            data={this.state.list}
            renderItem={({item}) => <LaunchListItem onItemPress={this._onItemPress} data={item}/>}
        />
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#a9bdff'
    }
});

