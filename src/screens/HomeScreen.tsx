import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useMovies } from '../hooks/useMovies';
import Slider from '../components/Slider';

export default function HomeScreen() {
    // obtiene el estado de las peliculas
    const { nowPlaying, loading, loadNextPage } = useMovies();

    return (
        <View>
            <Text>HomeScreen</Text>
            <Slider 
                movies={nowPlaying.movies} 
                height={150} 
                finpagina={loadNextPage} 
            />
            {loading && <Text>Cargando...</Text>}
            
        </View>
    );
}

const styles = StyleSheet.create({});