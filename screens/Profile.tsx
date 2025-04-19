import { View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../constants/GlobalStyles';

export default function ProfileScreen() {
  return (
    <View style={GlobalStyles.screenContainer}>
      <Text style={GlobalStyles.screenTitle}>Profile</Text>
      <Text style={GlobalStyles.screenText}>This is the profile screen.</Text>
    </View>
  );
}
