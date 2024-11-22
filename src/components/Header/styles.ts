import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        flex: 1,
        width: '100%',
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexDirection: 'row'
    },
    title: {
        fontSize: 30,
        fontWeight: 600,
        marginLeft: 20,
    },
    hours:{
        fontSize: 20,
        marginLeft: 20,
    },
});