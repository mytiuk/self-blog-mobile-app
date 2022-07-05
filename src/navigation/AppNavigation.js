import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
import { BookedScreen } from '../screens/BookedScreen'
import { COLORS, FONTS, SIZES } from '../styles'
import { AboutScreen } from '../screens/AboutScreen'
import { CreateScreen } from '../screens/CreateScreen'
import { Ionicons } from '@expo/vector-icons';
import { CustomDrawer } from '../components/CustomDrawer';


const Stack = createStackNavigator()

const MainNavigation = () => {
  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Main' component={MainScreen}/>
        <Stack.Screen name='Post' component={PostScreen}/>
        <Stack.Screen name='Book' component={BookedScreen}/>
      </Stack.Navigator>
  )
}

const BookedNavigation = () => {
  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Book' component={BookedScreen}/>
        <Stack.Screen name='Post' component={PostScreen}/>
      </Stack.Navigator>
  )
}

const Drawer = createDrawerNavigator()

const drawerOption = {
  headerShown: false,
  drawerLabelStyle: {
    marginLeft: -20,
    fontFamily: FONTS.medium,
    fontSize: SIZES.medium + 2
  },
  drawerActiveBackgroundColor: '#aa18ea',
  drawerActiveTintColor: COLORS.white,
  drawerInactiveTintColor: '#333'
  }

const option = {
  mainDrawer: {
    drawerIcon: ({color}) =>  <Ionicons name='home-outline' size={28} color={color} />,
  },
  createOption: {
    drawerIcon: ({color}) =>  <Ionicons name='create-outline' size={28} color={ color} />,
  },
  aboutOption: {
    drawerIcon: ({color}) =>  <Ionicons name='information-circle-outline' size={28} color={color} />,
  },
  bookedOption: {
    drawerIcon: ({color}) =>  <Ionicons name='bookmarks-outline' size={28} color={color} />,
  }
}
   
export const AppNavigation = () => {
  return (
    <NavigationContainer >
      <Drawer.Navigator screenOptions={drawerOption} drawerContent={props => <CustomDrawer {...props}/>}>
        <Drawer.Screen name='Home' component={MainNavigation} options={option.mainDrawer}/>
        <Drawer.Screen name='Booked' component={BookedNavigation} options={option.bookedOption}/>
        <Drawer.Screen name='Create' component={CreateScreen} options={option.createOption}/>
        <Drawer.Screen name='About' component={AboutScreen} options={option.aboutOption}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}


