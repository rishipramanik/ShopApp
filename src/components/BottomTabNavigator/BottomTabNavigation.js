import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import colors from '../../constants/colors';
import HomeScreen from '../../screens/HomeScreen';
import Categories from '../../screens/Categories';
import BottomIconsActive from '../UI/BottomIconsActive';
import BottomIconsInactive from '../UI/BottmIconsInactive';

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: true,
  headerShown: false,
  tabBarHideOnKeyboard: true,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 80,
    background: colors.backgroundDark,
  },
};

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <BottomIconsActive name="home" />
            ) : (
              <BottomIconsInactive name="home" />
            );
          },
        }}
      />
      <Tab.Screen
        name="Categories"
        component={() => <Categories name="Categories" />}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <BottomIconsActive name="category" />
            ) : (
              <BottomIconsInactive name="category" />
            );
          },
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={() => <Categories name="Favorites" />}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <BottomIconsActive name="favorite" />
            ) : (
              <BottomIconsInactive name="favorite" />
            );
          },
        }}
      />
      <Tab.Screen
        name="More"
        component={() => <Categories name="More" />}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <BottomIconsActive name="more-vert" />
            ) : (
              <BottomIconsInactive name="more-vert" />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
