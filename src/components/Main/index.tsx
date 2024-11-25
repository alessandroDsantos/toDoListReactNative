import { View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import { styles } from './styles';
import { useContext, useState } from 'react';
import { NotesContext } from '../../context/notesContext';
import { NoteCards } from '../Notecards';

export const Main: React.FC = () => {
    const { 
        infoCard, 
    } = useContext(NotesContext);

    return(
        <View style={styles.main}>

        <FlatList
          data={infoCard}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <NoteCards item={item}/>
          )}
          ListEmptyComponent={() => (
            <Text style={styles.emptyList}>Adicione uma nota!</Text>
          )}
        />
      
      </View>
    );
}