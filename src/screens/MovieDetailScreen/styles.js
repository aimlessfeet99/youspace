import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'black',
        height: '100vh',
        padding: 50,
    },
    poster: {
        width: '100%',
        height: 400,
        resizeMode: 'cover',
        borderRadius: 10,
        marginBottom: 10
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white'
    },
    releaseDate: {
        fontSize: 18,
        color: '#666',
        marginBottom: 10,
        color: 'white'

    },
    rating: {
        fontSize: 18,
        color: '#444',
        marginBottom: 10,
        color: 'white'

    },
    description: {
        fontSize: 16,
        color: '#333',
        textAlign: 'justify',
        color: 'white'

    }
});