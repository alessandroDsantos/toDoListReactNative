import { StatusBar } from 'expo-status-bar';
import { useEffect, useState, useRef, useContext } from 'react';
import { Text, TextInput, TouchableOpacity, View, FlatList, Alert, Modal} from 'react-native';

import { Note } from '../../interfaces/note';

import { styles } from './styles'; 

import { Header } from '../../components/Header';
import { NotesContext } from '../../context/notesContext';
import { Main } from '../../components/Main';
import { Footer } from '../../components/Footer';


export function Home() {
  // // const [cont, setCont] = useState<number>(infoCard.length);

  // // const prevInfoCardLength = useRef(infoCard.length);
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />

      <Header/>

      <Main/>

      <Footer/>

    </View>
  );
}

