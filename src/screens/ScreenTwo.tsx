import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useMovies } from '../hooks/useMovies';
import Slider from '../components/Slider';

export default function ScreenTwo() {
    const { nowPlaying, loading, loadNextPage } = useMovies();

    return (
        <View style={styles.container}>
            <Text>Screen Two</Text>
            <Slider 
                movies={nowPlaying.movies} 
                height={400} // Different height
                finpagina={loadNextPage} 
            />
            {loading && <Text>Cargando...</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Positioned at the bottom
    alignItems: 'center',
  },
});
