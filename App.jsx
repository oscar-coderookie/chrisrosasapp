import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import * as Font from 'expo-font';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


const loadFonts = async () => {
  await Font.loadAsync({
    'nombre-de-la-fuente': require('./assets/fonts/Urbanist-VariableFont_wght.ttf'),
  });
};

// Componentes de las pantallas de las pestañas
const HomeScreen = () => (
  <View style={styles.container}>
    <ImageBackground
      source={require('./assets/background.jpg')} // Ruta de la imagen de fondo
      style={styles.backgroundImage}
      resizeMode='cover'>
      <Image
        source={require('./assets/logo-white.png')}
        style={styles.logo} />
    </ImageBackground>

  </View>
);

const ArtistsScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Artists Screen</Text>
  </View>
);

const ServicesScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Services Screen</Text>
  </View>
);

// Configuración de las pestañas
const Tab = createBottomTabNavigator();

const App = () => {
  useEffect(() => {
    loadFonts();
  }, []);
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={
          {
            tabBarStyle: { backgroundColor: 'black', alignItems: 'center', justifyContent: 'center', paddingBottom: 20, height: 60,  },
            tabBarIcon: () => {
              return null; // No proporcionar ningún componente de icono
            },
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: "black" },
            headerTintColor: 'white',
            headerTitleStyle: { fontSize: 20 },
            tabBarLabelStyle: { fontSize: 16, color: 'white', fontWeight: 300, textTransform: 'uppercase',fontFamily: 'nombre-de-la-fuente', letterSpacing: 1}
          }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Artists" component={ArtistsScreen} />
        <Tab.Screen name="Services" component={ServicesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1, // Opcional: ajusta la imagen al tamaño del contenedor
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: "center"
  },
  text: {
    color: 'black',
    fontSize: 24,
    fontWeight: '300',
    fontFamily: 'nombre-de-la-fuente'
  },
  navigationText: {
    color: 'gray',
    fontSize: 16,

  },
  logo: {
    width: 300, // Ajusta el ancho del logo según sea necesario
    resizeMode: 'contain',
  },
});

export default App;