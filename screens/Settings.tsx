import { Text, View, StyleSheet } from 'react-native';
import { GlobalStyles } from '../constants/GlobalStyles';
export default function SettingsScreen() {
  return (
    <View style={GlobalStyles.screenContainer}>
      <Text style={GlobalStyles.screenTitle}>Settings</Text>
      <Text style={GlobalStyles.screenText}>This is the settings screen.</Text>
    </View>
  );
}
