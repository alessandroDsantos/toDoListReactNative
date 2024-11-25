import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({ 
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
})