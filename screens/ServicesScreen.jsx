import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, ImageBackground } from 'react-native';
import React from 'react';
import ServicesList from '../components/ServicesList';


const ServicesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
          <View style={styles.listContainer}>
            <Text style={styles.subtitle}>Servicios</Text>
            <ServicesList />
          </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Ajusta la imagen para que cubra todo el contenedor
  },
  text: {
    fontSize: 42,
  },
  listContainer: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  subtitle: {
    fontSize: 30,
    textTransform: 'uppercase',
    textAlign: 'center',
    paddingTop: 40,
    color: 'white', // Color del texto en el fondo de la imagen
  },
});

export default ServicesScreen;
