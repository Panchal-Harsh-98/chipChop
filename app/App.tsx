import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerItems from '../constants/DrawerItems';
import ProfileScreen from '../screens/Profile';
import SettingsScreen from '../screens/Settings';

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerType='front' initialRouteName='Profile'>
        {DrawerItems.map((drawerItem) => (
          <Drawer.Screen
            key={drawerItem.name}
            name={drawerItem.name}
            component={
              drawerItem.name === 'Profile' ? ProfileScreen : SettingsScreen
            }
          />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
