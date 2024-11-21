import { StatusBar } from 'expo-status-bar';
import { useEffect, useState, useRef } from 'react';
import { Text, TextInput, TouchableOpacity, View, FlatList, Alert, Modal} from 'react-native';

import { styles } from './styles' 

interface Note { 
  id: number; 
  content: string; 
  selected?: boolean;
}

export function Home() {

  const [today, setToday] = useState(new Date());
  
  const [infoCard, setInfoCard] = useState<Note[]>([]);
  const [identifier, setIdentifier] = useState<number>(0);
  const [inputText, setInputText] = useState<string>('');


  const [cont, setCont] = useState<number>(infoCard.length);

  // const prevInfoCardLength = useRef(infoCard.length);//

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  
  const [infoCardClone, setInfoCardClone] = useState<Note[]>([]);
  const [listDone, setListDone] = useState<Note[]>([]);

  //info data de hoje
  const month = [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  const dateFormat = `${today.getDate()} de ${month[today.getMonth()]} de ${today.getFullYear()}`;

  useEffect(() => {
    const checkDate = () => {
      const now = new Date();
      if(now.getDate() !== today.getDate()){
        setToday(now);
      }
    }

    const interval = setInterval(checkDate, 60000);

    return () => clearInterval(interval);
  }, []);

  //Código para adicionar e remover notas
  function addNote(){
    if(infoCard.length !== 0 && infoCard.some(item => item.content === '')){
      Alert.alert(`Existe Nota Vazia!`, `Favor adicione um conteúdo na nota, antes de criar outra!`)
      return
    }
    const newNote: Note = {id: identifier, content: ''};
    setInfoCard([...infoCard, newNote]);
    setIdentifier(identifier + 1);
    setCont(infoCard.length);  
  }

  function addTextArray(id: number, text: string){
    setInfoCard(infoCard.map(note => note.id === id ? { ...note, content: text } : note));
  }
  
  function rmNote(id: number){
    setInfoCard(infoCard.filter(item => item.id !== id));
    setInfoCardClone(infoCardClone.filter(item => item.id !== id));
    setListDone(listDone.filter(item => item.id !== id));
  }

  //Listas do A fazer e Feito
  useEffect(() => {
    if(infoCard.length >= cont){ //prevInfoCardLength.current
      setInfoCardClone(infoCard.map(note => ({...note, selected: false})));
    }
    setCont(infoCard.length); 
    // prevInfoCardLength.current = infoCard.length
  }, [infoCard]);


  function check(item: Note, option: boolean){
    if(option){
      setInfoCardClone(prevInfoCardClone  => prevInfoCardClone.filter(info => info.id !== item.id));  
      setListDone(prevListDone => [...prevListDone, {...item, selected: true}]);
    } else {
      setListDone(prevListDone => prevListDone.filter(info => info.id !== item.id));
      setInfoCardClone(prevInfoCardClone => [...prevInfoCardClone, {...item, selected: false}]);
    }
  }

  return (
    <View style={styles.container}>

      <StatusBar style="auto" />

      <View style={styles.header}>

        <View>
          <Text style={styles.title}>To Do List</Text>
          <Text style={styles.hours}>{dateFormat}</Text>
        </View>

        <TouchableOpacity style={styles.addNote} onPress={addNote}>
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.main}>

        <FlatList
          data={infoCard}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.cardNote}>
              <TextInput style={styles.note} placeholder='Digite uma nota...' onChangeText={text => setInputText(text)} onBlur={() => addTextArray(item.id, inputText)}/>
              <TouchableOpacity style={styles.rmNote} onPress={() => rmNote(item.id)}>
                <Text style={styles.less}>-</Text>
              </TouchableOpacity>
            </View>
          )}
          ListEmptyComponent={() => (
            <Text style={styles.emptyList}>Adicione uma nota!</Text>
          )}
        />
      
      </View>

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
          <View style={styles.modalContainer}>

            <View style={styles.modalContent}>

              <TouchableOpacity style={styles.viewModalButtonTasks} onPress={() => setModalVisible(false)}>
                <Text style={styles.modalTextButton}>Tarefas</Text>
                <Text style={styles.modalTextButton}>&#9660;</Text>
              </TouchableOpacity>

              <View style={styles.areaToDo}>

                <Text style={styles.textToDo}>A fazer</Text>

                  <FlatList
                    data={infoCardClone}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => (
                      <View style={styles.areaListToDo}>

                        <TouchableOpacity style={[styles.checkboxBase, item.selected && styles.checkboxChecked]} onPress={() => check(item, true)}>  
                        </TouchableOpacity>

                        <Text style={styles.textContentList}>{item.content}</Text>

                      </View>
                    )}
                    ListEmptyComponent={() => (
                      <Text style={styles.emptyContentList}>Não tem nota a fazer!</Text>
                    )}
                  />

              </View>

              <View style={styles.areaDone}>
                <Text style={styles.textToDo}>Feita</Text>

                <FlatList
                    data={listDone}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => (
                      <View style={styles.areaListToDo}>

                        <TouchableOpacity style={[styles.checkboxBase, item.selected && styles.checkboxChecked]} onPress={() => check(item, false)}>  
                        </TouchableOpacity>

                        <Text style={styles.textContentListDone}>{item.content}</Text>

                      </View>
                    )}
                    ListEmptyComponent={() => (
                      <Text style={styles.emptyContentList}>Não tem nada feito!</Text>
                    )}
                  />

              </View>

            </View>

          </View>

        </Modal>

      </View>

    </View>
  );
}

