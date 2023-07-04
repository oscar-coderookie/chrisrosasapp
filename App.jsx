import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { BottomTab } from './navigation/BotomTab';

// Componentes de las pantallas de las pestañas

const App = () => {
  const [fontsLoaded] = useFonts({
    Urbanist: require('./assets/fonts/Urbanist-VariableFont_wght.ttf')
  })

  if (!fontsLoaded)return null;

  return (
    <NavigationContainer>
      <BottomTab/>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 24,
    fontWeight: '300',
    fontFamily: 'Urbanist'
  },
  navigationText: {
    color: 'gray',
    fontSize: 16,

  },
});

export default App;