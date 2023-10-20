import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { styles } from './styles';

const MovieDetailScreen = ({ route }) => {
    const { movie } = route.params;

    return (
        <ScrollView style={styles.container}>
            <Image 
                source={{ uri: `${process.env.REACT_APP_IMAGE_URL}${movie.poster_path}` }} 
                style={styles.poster} 
            />
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.releaseDate}>Release Date: {movie.release_date}</Text>
            <Text style={styles.rating}>Rating: {movie.vote_average}</Text>
            <Text style={styles.description}>{movie.overview}</Text>
        </ScrollView>
    );
};

export default MovieDetailScreen;
