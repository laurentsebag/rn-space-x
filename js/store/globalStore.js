import {createStore} from 'redux';
import rootReducer from '../reducers';

let store = null;

export function getGlobalStore() {
    if (!store) {
        store = createStore(rootReducer);
    }
    return store;
}
