import React, {Component} from 'react';
import {FlatList} from 'react-native/Libraries/react-native/react-native-implementation';
import LaunchesService from "../services/LaunchesService";
import LaunchesAdapter from "../adapters/LaunchesAdapter";
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
        const launchesAdapter = new LaunchesAdapter();
        launchesService.fetchData()
            .then(data => launchesAdapter.adapt(data))
            .then((data) => {
                this.setState({ list: data });
            })
            .catch(() => {
                this.setState({ list: [{ key: '0', title: 'error: can\'t load data'}] });
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

