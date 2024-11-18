import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { useMovies } from '../hooks/useMovies';
import Slider from '../components/Slider';

export default function HomeScreen() {
    const { nowPlaying, loading, loadNextPage } = useMovies(); // Asegúrate de desestructurar loadNextPage aquí

    return (
        <View>
            <Text>HomeScreen</Text>
            <Slider movies={nowPlaying.movies} height={100} />
            {loading ? (
                <Text>Cargando...</Text>
            ) : (
                <Button title="Siguiente Página" onPress={loadNextPage} /> // Ahora loadNextPage está definido
            )}
        </View>
    );
}

const styles = StyleSheet.create({});