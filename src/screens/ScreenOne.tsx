import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useMovies } from '../hooks/useMovies';
import Slider from '../components/Slider';

export default function ScreenOne() {
  //obtiene el estado de las  peliculas
    const { nowPlaying, loading, loadNextPage } = useMovies();

    return (
        <View style={styles.container}>
            <Text>Screen One</Text>
            <Slider 
                movies={nowPlaying.movies} 
                height={600}
                finpagina={loadNextPage} 
            />
            {loading && <Text>Cargando...</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

