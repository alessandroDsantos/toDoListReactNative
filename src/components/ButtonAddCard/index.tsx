import { Text, TouchableOpacity, Alert} from 'react-native';
import { styles } from './styles';
import {useAddNote} from '../../hooks/useAddNote';

// type props = {
//     addButtonPress: () => void;
// }

export function ButtonAddCard(){
    const { addNote } = useAddNote();
    

    return(
        <TouchableOpacity style={styles.addNote} onPress={addNote}>
            <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
    );
}
