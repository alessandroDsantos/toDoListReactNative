import { View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import { Note } from '../../interfaces/note';
import { useAddTextArray } from '../../hooks/useAddTextArray';
import { useRmNote } from '../../hooks/useRmNote';

interface itemProps {
    item: Note;
}

export const NoteCards: React.FC<itemProps> = ({item}) => {
    const [inputText, setInputText] = useState<string>('');
    const { addTextArray } = useAddTextArray();
    const { rmNote } = useRmNote();
  
    return(
        <View style={styles.cardNote}>
            <TextInput style={styles.note} placeholder='Digite uma nota...' onChangeText={text => setInputText(text)} onBlur={() => addTextArray(item.id, inputText)}/>
            <TouchableOpacity style={styles.rmNote} onPress={() => rmNote(item.id)}>
            <Text style={styles.less}>-</Text>
            </TouchableOpacity>
        </View>
    );
}