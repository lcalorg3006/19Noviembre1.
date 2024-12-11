import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { useMovies } from '../hooks/useMovies';
import Slider from '../components/Slider';

export default function HomeScreen({ navigation }) {
    const { nowPlaying, loading, loadNextPage } = useMovies();

    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <Slider 
                movies={nowPlaying.movies} 
                height={100} 
                finpagina={loadNextPage} 
            />
            {loading && <Text>Cargando...</Text>}

            <Pressable 
                style={styles.link} 
                onPress={() => navigation.navigate('ScreenOne')}
            >
                <Text style={styles.linkText}>Go to Screen One</Text>
            </Pressable>

            <Pressable 
                style={styles.link} 
                onPress={() => navigation.navigate('ScreenTwo')}
            >
                <Text style={styles.linkText}>Go to Screen Two</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    link: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#ccc',
        borderRadius: 5,
    },
    linkText: {
        color: 'blue',
        fontWeight: 'bold',
    },
});
