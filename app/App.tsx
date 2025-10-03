import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import DrawerItems from '../constants/DrawerItems';
import ProfileScreen from '../screens/Profile';
import SettingsScreen from '../screens/Settings';
import { GlobalStyles } from '../constants/GlobalStyles';
import Dashboard from '../screens/Dashboard';

const Drawer = createDrawerNavigator();

export default function App() {
  const screenDimensions = useWindowDimensions();
  const isLargeScreen = screenDimensions.width >= 768;

  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName='Dashboard'
          screenOptions={{
            drawerType: isLargeScreen ? 'permanent' : 'slide',
            drawerActiveTintColor: 'blue',
          }}
        >
          {DrawerItems.map((drawerItem) => (
            <Drawer.Screen
              key={drawerItem.name}
              name={drawerItem.name}
              component={
                drawerItem.name === 'Dashboard'
                  ? Dashboard
                  : drawerItem.name === 'Profile'
                  ? ProfileScreen
                  : SettingsScreen
              }
            />
          ))}
        </Drawer.Navigator>
      </NavigationContainer>
      {/* Floating Action Button */}
      <TouchableOpacity style={GlobalStyles.fab} onPress={() => {}}>
        <Text style={GlobalStyles.fabText}>+</Text>
      </TouchableOpacity>
    </>
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
