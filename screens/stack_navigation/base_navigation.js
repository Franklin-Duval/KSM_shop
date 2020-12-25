import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

/*
    Import the different screens
*/
import Login from '../../components/login_terms_condition/login'
import Slide from '../../components/splash_screen_slide/slides'
import Terms from '../../components/login_terms_condition/terms_conditions'
import Market_Place from '../drawer_navigation/drawer_navigation'
//import Tab from '../tab_navigation/market_place_tab'

const screens = {
    Slide:{
        screen: Slide,
        navigationOptions:{
            headerShown: false
        }
    },

    Terms:{
        screen: Terms,
        navigationOptions:{
            headerShown: false
        }
    },

    Login:{
        screen: Login,
        navigationOptions:{
            headerShown: false
        }
    },

    Market:{
        screen: Market_Place,
        navigationOptions:{
            headerShown: false
        }
    },
}

const Stack = createStackNavigator(screens)

export default createAppContainer(Stack)