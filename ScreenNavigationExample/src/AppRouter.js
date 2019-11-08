import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import FlowerDetailScreen from './screens/FlowerDetailScreen';


const MainNavigator = createStackNavigator({
        Home: HomeScreen,
        FlowerDetail: FlowerDetailScreen,
    }  ,
    {
        initialRouteName:'Home',
        defaultNavigationOptions:{
            title:'APPS',
        }
    }
);

export default createAppContainer(MainNavigator);