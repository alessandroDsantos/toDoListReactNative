import { Text, TouchableOpacity, View, FlatList, Modal} from 'react-native';
import { styles } from './styles';
import { List } from '../List';


interface visible {
    setModalVisible: (value: boolean) => void;
}

export const ContentModal: React.FC<visible> = ({setModalVisible}) => {
    return(
        <View style={styles.modalContainer}>

            <View style={styles.modalContent}>

              <TouchableOpacity style={styles.viewModalButtonTasks} onPress={() => setModalVisible(false)}>
                <Text style={styles.modalTextButton}>Tarefas</Text>
                <Text style={styles.modalTextButton}>&#9660;</Text>
              </TouchableOpacity>

              <View style={styles.areaToDo}>

                <Text style={styles.textToDo}>A fazer</Text>


                    <List typeList={'infoCardClone'}/>
                

              </View>

              <View style={styles.areaDone}>

                <Text style={styles.textToDo}>Feita</Text>

                    <List typeList={'listDone'}/>

              </View>

            </View>

        </View>
    );
}