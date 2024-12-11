import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Movie } from '../config/entities/Movie';

interface Movies {
  movies: Movie[];
  height: number;
  finpagina: () => void; // Add this prop
}

export default function Slider({ movies, height, finpagina: finpagina }: Movies) {
  const handleScroll = (event: any) => {
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
    const isCloseToBottom = layoutMeasurement.height + contentOffset.y >= contentSize.height - 20; // 20 is a buffer

    if (isCloseToBottom) {
      finpagina(); 
    }
  };

  return (
    <View>
      <ScrollView 
        style={styles.contenedor} 
        horizontal={true} 
        onScroll={handleScroll} 
        scrollEventThrottle={16} 
      >
        {movies.map((item) => (
          <Image 
            style={styles.imagen} 
            key={item.id}
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
    height: 300,
  }, 
  imagen: {
    width: 200,
    margin: 1
  }
});