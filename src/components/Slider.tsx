import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Movie } from '../config/entities/Movie';

interface Movies {
  movies: Movie[];
  height: number;
  finpagina: () => void; 
}

export default function Slider({ movies, height, finpagina: finpagina }: Movies) {
  const handleScroll = (event: any) => {
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
    //verifica si estas cerca del final de la pagina
    const isCloseToBottom = layoutMeasurement.height + contentOffset.y >= contentSize.height - 20; 
    //si esta cerca del final llama a la funcion de finpagina
    if (isCloseToBottom) {
      finpagina();
    }
  };

  return (
    <View>
      <ScrollView
        style={styles.contenedor}
        horizontal={true} //habilita el desplazamiento horizontal
        onScroll={handleScroll} 
        scrollEventThrottle={16}//controla la frecuencia de desplazamiento
      >
        {movies.map((item, index) => (
          <Image
            style={styles.imagen}
            key={`${item.id}-${index}`} // clave unica para cada imagen
            source={{
              uri: `https://image.tmdb.org/t/p/original${item.poster}`,
            }}
          />
        ))}

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    height: 301,
  },
  imagen: {
    width: 200,
    margin: 1
  }
});