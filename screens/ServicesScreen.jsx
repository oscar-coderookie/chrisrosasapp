import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, ImageBackground } from 'react-native'
import React from 'react';

const windowHeight = Dimensions.get('window').height - (60);

const ServicesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        pagingEnabled
      >
        <View style={styles.section1}>
          <ImageBackground
          source={require('../assets/background.jpg')}>
            
          </ImageBackground>
          <Text>Esta es la seccion 1</Text>
        </View>
        <View style={styles.section2}>
          <Text>Esta es la seccion 2</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ServicesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 42,
  },
  section1: {
    width: '100%',
    height: windowHeight,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    paddingBottom: 100,
  },
  section2:{
    width: '100%',
    height: windowHeight,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingBottom: 100,
  }
})