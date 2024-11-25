import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    modalContent: {
        height: '85%',
        width: '100%',
        backgroundColor: '#1f1f1f',
        alignItems: 'center',
    },
    viewModalButtonTasks: {
        flexDirection: 'row',
        backgroundColor: '#1f1f1f',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    modalTextButton: {
        fontSize: 50,
        lineHeight: 50,
        color: 'white'
    },
    areaToDo: {
        width: '95%',
        height: '42%',
        marginBottom: 5,
        borderTopWidth: 1,
        borderColor: '#fff'
    },
    areaDone: {
        width: '95%',
        height: '42%',
        borderTopWidth: 1,
        borderColor: '#fff'
    },
    textToDo: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 600,
    },
})