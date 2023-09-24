import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const servicesData = [
  { id: '1', title: 'contrataciones', description: 'buscamos nuevos y frescos talentos que puedan incursionar en el género urbano' },
  { id: '2', title: 'gestión', description: 'nos encargamos de que tu carrera se impulse hacia el éxito y velamos por ello, brindandote una asesoria integral' },
  { id: '3', title: 'producción', description: 'hacemos el mejor trabajo en equipo para aseguraros la mejor calidad y resultado a la hora de grabar y producir cualquier pieza audiovisual' },
  { id: '4', title: 'mezcla y masterización', description: 'lleva a la realidad tus proyectos musicales más ambiciosos con el respaldo de mas de una docena de artistas insignia del género urbano' },
  { id: '5', title: 'composición y escritura de canciones', description: 'Descripción del servicio 4' },
  // Agrega más objetos según sea necesario
];

const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.description}>{item.description}</Text>
  </View>
);

const ServiceList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.centered}>
        <FlatList
          data={servicesData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.list}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

  },
  centered: {
    alignItems: 'center'
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
   list:{
    paddingBottom: 150,
    paddingTop: 100
   },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
  },
});

export default ServiceList;