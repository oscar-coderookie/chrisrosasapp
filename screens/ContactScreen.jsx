import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Chris Rosas</Text>
      <Text style={styles.title}>Music Manager</Text>
      <Text style={styles.location}>Europe</Text>
      <Text style={styles.email}>Email: chrisrosase@icloud.com</Text>
      <Text style={styles.phone}>Phone: +17868308732</Text>
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
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  location: {
    fontSize: 16,
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    marginBottom: 10,
  },
  phone: {
    fontSize: 16,
  },
});

export default ContactScreen;
