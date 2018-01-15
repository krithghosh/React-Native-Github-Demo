import { AppRegistry } from 'react-native'
import MainScreen from './App/Components/Main'
import DashboardScreen from './App/Components/Dashboard'
import ProfileScreen from './App/Components/Profile'
import RepositoriesScreen from './App/Components/Repositories'
import WebViewScreen from './App/Components/Web_View'
import { StackNavigator } from 'react-navigation'

const SimpleApp = StackNavigator({
    Main: { screen: MainScreen },
    Dashboard: { screen: DashboardScreen },
    Profile: { screen: ProfileScreen },
    Repositories: {screen: RepositoriesScreen},
    Web_View: { screen: WebViewScreen }
});

AppRegistry.registerComponent('githubNoteTaker', () => SimpleApp);