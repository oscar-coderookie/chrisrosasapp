import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import backImg from '../assets/images/background.jpg';
import logoWhite from '../assets/logo-white.png';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backImg}
        style={styles.backgroundImage}
        resizeMode='cover'
      >
        {/* Agrega un contenedor para el logo con los estilos adecuados */}
        <View style={styles.logoContainer}>
          <Image
            source={logoWhite}
            style={styles.logo}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    flex: 1, // Asegura que el contenedor del logo ocupe todo el espacio disponible
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  backgroundImage: {
    flex: 1,
    // Elimina alignItems y justifyContent aquí para que el fondo no se centre,
    // en su lugar, el contenedor del logo se centrará dentro del fondo.
  },
});

export default HomeScreen;
