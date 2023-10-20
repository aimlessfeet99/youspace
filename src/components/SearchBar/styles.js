import { StyleSheet } from "react-native";

export const searchInputstyles = StyleSheet.create({
    container: {
        // margin: 1,
        flexDirection:"row",
        display: 'flex',
        margin: 1,
        justifyContent: 'flex-start'
    },
    inputField:{
        backgroundColor: 'white',
        flex: 2,
        padding: 10,  
        marginTop: 5,
        marginRight: '1.3rem', 
        marginLeft: '1rem', 
        marginBottom: 5
    },
    button:{
        alignContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 37,
        borderRadius: 4,
        elevation: 3,
        marginTop: 2,
        backgroundColor: '#2196f3'
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white'
    }

})