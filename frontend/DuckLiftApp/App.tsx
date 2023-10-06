import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import colors from './config/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome on DuckLift App</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
  },
});
