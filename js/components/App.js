import React, {Component} from 'react';
import {Provider} from "react-redux";
import AppNavigation from '../navigation'
import {getGlobalStore} from "../store/globalStore";

export default class App extends Component {
    render() {
        return (
            <Provider store={getGlobalStore()}>
                <AppNavigation/>
            </Provider>
        );
    }
}