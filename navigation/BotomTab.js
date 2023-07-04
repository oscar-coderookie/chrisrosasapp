import React from 'react';
import { StyleSheet } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import ContactScreen from '../screens/ContactScreen';
import ArtistsScreen from '../screens/ArtistsScreen';
import ServicesScreen from '../screens/ServicesScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    backgroundColor: 'rgba(0, 0, 0, 0.43)', // Fondo transparente
                    position: 'absolute', // Posición absoluta para superponerlo en la pantalla
                    elevation: 0, // Elimina la sombra en Android
                    borderTopWidth: 0, height: 100, paddingBottom: 10, paddingTop: 10
                },
                headerShown: false,
                headerTitleStyle: { fontSize: 20 },
                tabBarLabelStyle: {
                    fontSize: 16,
                    color: '#58D8E5',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    fontFamily: 'Urbanist',
                    letterSpacing: 1,
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: '#58D8E5',
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'home') {
                        iconName = focused ? 'home' : 'home';
                    } else if (route.name === 'artists') {
                        iconName = focused ? 'music' : 'music';
                    } else if (route.name === 'services') {
                        iconName = focused ? 'briefcase' : 'briefcase';
                    } else if (route.name === 'booking') {
                        iconName = focused ? 'address-book' : 'address-book';
                    }

                    return <FontAwesome name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="home" component={HomeScreen} />
            <Tab.Screen name="artists" component={ArtistsScreen} />
            <Tab.Screen name="services" component={ServicesScreen} />
            <Tab.Screen name="booking" component={ContactScreen} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    icon: {},
});