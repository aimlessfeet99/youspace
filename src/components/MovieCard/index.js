import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';
import { styles } from './styles';

const MovieCard = ({ movie, onPress }) => {

    return (
        <>
            <TouchableOpacity style={styles.card} >
                <Image source={{ uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}` }}  style={styles.image}/>
                <Text style={styles.title}>{movie.title}</Text>
                <Button  title='Show Details' onPress={() => onPress(movie.id)}></Button>
            </TouchableOpacity>
        </>
    )
};



export default MovieCard;
