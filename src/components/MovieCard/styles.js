import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
        margin: 10,

        flex: 1,
        // margin: 10,
        padding: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        // borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
      },
      image: {
        width: '100%',
        height: 100,
        // borderTopLeftRadius: 8,
        // borderTopRightRadius: 8,
      },
      title: {
        fontSize: 16,
        fontWeight: 'bold',
        padding: 10,
        textAlign: 'center',
      },
      button:{
        padding: 1
      }
})