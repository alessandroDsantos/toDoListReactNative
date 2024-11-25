import { Text, TouchableOpacity, View, Modal} from 'react-native';
import {styles} from './styles';
import { useState } from 'react';
import { ContentModal } from '../ContentModal';


export const Footer: React.FC = () => {
      // const [cont, setCont] = useState<number>(infoCard.length);
    
      // const prevInfoCardLength = useRef(infoCard.length);//
    
      const [modalVisible, setModalVisible] = useState<boolean>(false);
      
      
    return(
        <View style={styles.footer}>

        <TouchableOpacity style={styles.viewButtonTasks} onPress={() => setModalVisible(true)}>
            <Text style={styles.textButton}>Tarefas</Text>
            <Text style={styles.textButton}>&#9650;</Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
        
        <ContentModal setModalVisible={setModalVisible}/>

        </Modal>

      </View>
    );
}
