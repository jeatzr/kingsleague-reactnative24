import { View, TextInput, Button, Text, StyleSheet } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Kings League</Text>
    </View>
  );
}

const styles = new StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 15
  }

})


