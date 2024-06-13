import { useEffect, useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { getTeams } from '../services/apikl';

export default function AllTeamsScreen() {

  const [teams, setTeams] = useState([])

  useEffect(() => {
    getTeams().then((data) => {
      console.log(data)
      setTeams(data)
    })
  }, [])

  return (
    <View style={styles.container}>
      <Text>Hola Kings League</Text>
      <View>
        {
          teams.map((team) => (
            <View key={team.id}>
              <Text>{team.nombre}</Text>
            </View>
          ))
        }
      </View>
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