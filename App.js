import { useEffect, useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';

export default function App() {

  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}

