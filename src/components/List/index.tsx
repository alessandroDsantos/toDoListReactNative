import { Text, TouchableOpacity, View, FlatList} from 'react-native';
import { styles } from './styles';
import { useContext, useEffect } from 'react';
import { NotesContext } from '../../context/notesContext';
import { useCheck } from '../../hooks/useCheck';

interface variables {
    typeList: string;
}

export const List: React.FC<variables> = ({typeList}) => {
    
    const { 
        infoCard, 
        infoCardClone,
        setInfoCardClone,
        listDone,
        cont,
        setCont
    } = useContext(NotesContext);

    //Listas do A fazer e Feito
    useEffect(() => {
        setCont(infoCard.length); 
        if(infoCard.length > cont){ //prevInfoCardLength.current
          setInfoCardClone(infoCard.map(note => ({...note, selected: false})));
        }
        // prevInfoCardLength.current = infoCard.length
    }, [infoCard]);

    useEffect(() => {
        console.log('--------List index-------');
        console.log('infoCard =>',infoCard.length);
        console.log('cont =>',cont);
    }, [infoCard]);

    const { check } = useCheck();

    return(
        <FlatList
        data={typeList === 'infoCardClone' ? infoCardClone : listDone}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
            <View style={styles.areaListToDo}>

            <TouchableOpacity style={[styles.checkboxBase, item.selected && styles.checkboxChecked]} onPress={() => check(item, typeList === 'infoCardClone' ? true : false)}>  
            </TouchableOpacity>

            <Text style={styles.textContentList}>{item.content}</Text>

            </View>
        )}
        ListEmptyComponent={() => (
            <Text style={styles.emptyContentList}>Não tem nota a fazer!</Text>
        )}
        />
    );
}