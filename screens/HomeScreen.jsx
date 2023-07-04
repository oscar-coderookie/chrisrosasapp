import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/background.jpg')} // Ruta de la imagen de fondo
                style={styles.backgroundImage}
                resizeMode='cover'>
                <Image
                    source={require('../assets/logo-white.png')}
                    style={styles.logo} />
            </ImageBackground>

        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 300, 
        resizeMode: 'contain',
    },
    backgroundImage: { 
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: "center"
    },
})


export default HomeScreen