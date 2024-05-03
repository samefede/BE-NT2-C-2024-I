import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

import { vibrate, vibrateLong } from './utils';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Este es un ejemplo para usar la API de vibracion del dispositivo!</Text>
      <StatusBar style="auto" />
      <Button
        title='Vibrar'
        onPress={vibrate}
       />

    </View>
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
