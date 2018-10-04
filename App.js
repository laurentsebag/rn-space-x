import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import HomeScreen from './HomeScreen'
import DetailsPage from './DetailsPage'
import FavouritesPage from './FavouritesPage'
import {createStackNavigator} from "react-navigation";


const HomeStack = createStackNavigator({
    Home: { screen: HomeScreen },
    Details: { screen: DetailsPage }
});

export default createMaterialBottomTabNavigator({
    Home: { screen: HomeStack },
    Favourites: { screen: FavouritesPage }
}, {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: {
        paddingBottom: 8,
        backgroundColor: '#694fad'
    },
});
