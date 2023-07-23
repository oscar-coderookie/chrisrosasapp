import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { BottomTab } from './navigation/BotomTab';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  const [fontsLoaded] = useFonts({
    Urbanist: require('./assets/fonts/Urbanist-VariableFont_wght.ttf')
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>

      <View style={styles.container}>
        <ImageBackground
          source={require('./assets/background.jpg')}
          style={styles.backgroundImage}
          resizeMode='cover'
        >
          <NavigationContainer>
            <BottomTab />
          </NavigationContainer>
        </ImageBackground>
      </View>
    </SafeAreaProvider>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
});

export default App;
