import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Pressable } from 'react-native';
import { getTopRatedMovies, searchMovies } from '../../service';
import MovieCard from '../../components/MovieCard';
import SearchBar from '../../components/SearchBar';
import { styles } from './styles';

const HomeScreen = ({ navigation }) => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [renderLimit, setRenderLimit] = useState(12);
    const [searchText, setSearchText] = useState('');


    const fetchMovies = async (pageNumber) => {
        setLoading(true);
        try {
            let response;

            if (searchText !== '') {
                response = await searchMovies(searchText, pageNumber);
            } else {
                response = await getTopRatedMovies(pageNumber);
            }
            if (pageNumber === 1) {

                setMovies(response.data.results);
            } else {

                setMovies((prevMovies) => [...prevMovies, ...response.data.results]);
            }
            setTotalPages(response.data.total_pages);
            setTotalResults(response.data.total_results);
            setPage(pageNumber);
            setLoading(false);

            if (pageNumber === response.data.total_pages) {
                setRenderLimit(response.data.total_results);
            }
        } catch (error) {
            console.error(error);
            setError(error.message);
            setLoading(false);
        }
    };

    const handleSearch = async () => {
        if (searchText !== '') {
            fetchMovies(1);
        } else {
            alert("Enter Some Data");
        }
    };

    const handleLoadMore = async () => {
        if (renderLimit < movies.length) {
            setRenderLimit((prevLimit) => prevLimit + 12);
        } else {
            fetchMovies(page + 1);
        }
    };

    useEffect(() => {
        if (movies.length <= 0) {
            fetchMovies(page);
        }
    }, []);

    const renderMovieCard = ({ item }) => (
        <MovieCard
            movie={item}
            onPress={() => navigation.navigate('Movie Detail Screen', { movie: item })}
        />
    );

    return (
        <View style={styles.container}>
            <SearchBar onSearch={handleSearch} searchText={searchText} setSearchText={setSearchText} setPage={setPage}/>
            <FlatList
                data={movies.slice(0, renderLimit)}
                keyExtractor={(item, index) => `${item.id}_${index}`}
                renderItem={renderMovieCard}
                numColumns={3}
                onEndReachedThreshold={0.5}
            />
            {error && (
                <Text style={{ color: 'red', padding: 10 }}>Error: {error}</Text>
            )}
            <View style={styles.div}>
                <Text>Viewing {renderLimit} movies out of {totalResults} movies</Text>
                {!loading && (
                    <Pressable style={styles.button} onPress={handleLoadMore} disabled={renderLimit === totalResults}>
                        <Text style={styles.text}>Load More</Text>
                    </Pressable>
                )}
            </View>
        </View>
    );
};

export default HomeScreen;
