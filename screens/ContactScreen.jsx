import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import backgroundImg from '../assets/images/background-2.jpg';

const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground 
      source={backgroundImg}
      style={styles.background}>
        <Text style={styles.name}>Chris Rosas</Text>
      <Text style={styles.title}>Music Manager</Text>
      <Text style={styles.location}>Europe</Text>
      <Text style={styles.email}>Email: chrisrosase@icloud.com</Text>
      <Text style={styles.phone}>Phone: +17868308732</Text>
      </ImageBackground>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  background:{
    height: "100%",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%", 
    resizeMode: 'cover',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 10,
    color: "rgba(255, 255, 255, 0.85)"
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: '400',
    color: "rgba(255, 255, 255, 0.85)"
  },
  location: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: '500',
    color: "rgba(255, 255, 255, 0.85)"
  },
  email: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: '500',
    color: "rgba(255, 255, 255, 0.85)"
  },
  phone: {
    fontSize: 16,
    fontWeight: '500',
    color: "rgba(255, 255, 255, 0.85)"
  },
});

export default ContactScreen;
