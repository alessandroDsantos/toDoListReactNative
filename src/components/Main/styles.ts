import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    main: {
        flex: 5,
        padding: 10
    },
    cardNote: {
        height: 70,
        width: 370,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: '#000',
        borderWidth: 2, 
        borderRadius: 20,
        marginBottom: 8
    },
    note: {
        height: 60,
        width: 300,
        padding: 10,
        fontSize: 20,
    },
    rmNote: {
        height: '100%',
        width: 60,
        backgroundColor: '#f32',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 18,
        borderBottomRightRadius: 18,
    },
    less: {
        fontSize: 60,
        lineHeight: 60,
    },
    emptyList: {
        textAlign: 'center',
        fontSize: 40
    },
})