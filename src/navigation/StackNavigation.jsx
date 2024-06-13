import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AllTeamsScreen from '../screens/AllTeamsScreen';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Teams" component={AllTeamsScreen} />
    </Stack.Navigator>
  )
}

export default StackNavigation