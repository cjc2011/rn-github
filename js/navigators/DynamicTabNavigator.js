import React from "react"
import { View, Text } from "react-native"
import {
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import PopularPage from '@pages/Main/PopularPage'
import TrendingPage from '@pages/Main/TrendingPage'
import DemoPage from '@pages/Main/DemoPage'
import FavoritePage from '@pages/Main/FavoritePage'
import MyPage from '@pages/Main/MyPage'
// import HomeTopTabNavigator from '@pages/Main/PopularPage/HomeTopTabNavigator'

const DynamicTabNavigator = createBottomTabNavigator(
  {
    PopularPage: {
      screen: PopularPage,
      navigationOptions: {
        tabBarLabel: "最热",
        tabBarIcon: ({ tintColor, focused }) => (
          <MaterialIcons
            name={'whatshot'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      }
    },
    TrendingPage: {
      screen: TrendingPage,
      navigationOptions: {
        tabBarLabel: "趋势",
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={'md-trending-up'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      }
    },
    DemoPage: {
      screen: DemoPage,
      navigationOptions: {
        tabBarLabel: "demo",
        tabBarIcon: ({ tintColor, focused }) => (
          <AntDesign
            name={'android1'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      }
    },
    FavoritePage: {
      screen: FavoritePage,
      navigationOptions: {
        tabBarLabel: "收藏",
        tabBarIcon: ({ tintColor, focused }) => (
          <MaterialIcons
            name={'favorite'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      }
    },
    MyPage: {
      screen: MyPage,
      navigationOptions: {
        tabBarLabel: "我的",
        tabBarIcon: ({ tintColor, focused }) => (
          <Entypo
            name={'user'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      }
    },
  }, {
    initialRouteName: 'PopularPage',
    navigationOptions: {
      header: null,
    },
  }
)

export default DynamicTabNavigator