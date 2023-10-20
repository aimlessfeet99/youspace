import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    button:{
        alignContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 30,
        elevation: 3,
        width: 200,
        marginTop: 2,
        marginLeft: 90,
        backgroundColor: '#2196f3'
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white'
    },
    div: {
        display: 'flex',
        justifyContent: 'space-between'
    }

})