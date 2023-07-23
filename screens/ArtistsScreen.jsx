import { ImageBackground, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from '../config/firebase'

const ArtistsScreen = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "artistas")
    const q = query(collectionRef, orderBy("nombre", "asc"));
    const unsub = onSnapshot(q, (snapshot) =>
      setArtists(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))),
    );

    return unsub;
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {artists.map((element, index) => {
          return (
            <View key={index}>
              <ImageBackground style={styles.imageBackground} source={{ uri: element.avatar }}>
                <Text style={styles.text}>{element.nombre}</Text>
              </ImageBackground>
            </View>
          )
        })}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    height: 660, // Ajusta esta altura según tus necesidades
  },
  text: {
    fontSize: 30,
    fontFamily: 'Urbanist',
    fontWeight: 700,
    color: 'white',
    position: 'absolute',
    bottom: 80, // Ajusta este valor para controlar la distancia del texto desde la parte inferior
    textTransform: 'uppercase',
  },
});

export default ArtistsScreen;
