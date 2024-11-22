import { Text, TouchableOpacity} from 'react-native';


import { styles } from './styles';

type props = {
    addButtonPress: () => void;
}

export function ButtonAddCard({addButtonPress}: props){
    return(
        <TouchableOpacity style={styles.addNote} onPress={addButtonPress}>
            <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
    );
}
