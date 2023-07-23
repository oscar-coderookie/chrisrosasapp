import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Animated } from 'react-native';

const HomeScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startAnimation = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2500,
            useNativeDriver: true,
          }),
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 2500,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    };

    startAnimation();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/background.jpg')}
        style={styles.backgroundImage}
        resizeMode='cover'
      >
        <Animated.View style={[styles.logoContainer, { opacity: fadeAnim, shadowColor: 'white', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.5, shadowRadius: 5 }]}>
          <ImageBackground
            source={require('../assets/logo-white.png')}
            style={styles.logo}
          />
        </Animated.View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'white',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  logo: {
    width: 300,
    resizeMode: 'contain',
  },
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;