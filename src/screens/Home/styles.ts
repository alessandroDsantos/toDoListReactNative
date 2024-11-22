import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
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
    footer: {
        flex: 1,
        width: '100%',
        backgroundColor: '#1f1f1f',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    viewButtonTasks:{
        flexDirection: 'row',
        backgroundColor: '#1f1f1f',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    textButton:{
        fontSize: 50,
        lineHeight: 50,
        textAlignVertical: 'center',
        color: 'white'
    },
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
    areaListToDo: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
    },
    checkboxBase: { 
        width: 24, 
        height: 24, 
        borderWidth: 2, 
        borderColor: '#fff', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginRight: 5
    }, 
    checkboxChecked: { 
        backgroundColor: '#fff', 
    }, 
    textContentList: {
        color: '#fff',
        fontSize: 20
    },
    textContentListDone: {
        color: '#fff',
        fontSize: 20,
        textDecorationLine: 'line-through'
    }, 
    emptyContentList: {
        color: '#fff',
        textAlign : 'center',
        fontSize: 25
    },
});