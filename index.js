import { AppRegistry } from 'react-native'
import MainScreen from './App/Components/Main'
import DashboardScreen from './App/Components/Dashboard'
import ProfileScreen from './App/Components/Profile'
import { StackNavigator } from 'react-navigation'

const SimpleApp = StackNavigator({
    Main: { screen: MainScreen },
    Dashboard: { screen: DashboardScreen },
    Profile: { screen: ProfileScreen }
});

AppRegistry.registerComponent('githubNoteTaker', () => SimpleApp);
