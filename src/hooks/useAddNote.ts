import { useContext, useEffect } from "react";
import { NotesContext } from "../context/notesContext";
import { Alert } from "react-native";
import { Note } from "../interfaces/note";


export const useAddNote = () => {
    const { 
        infoCard, 
        setInfoCard,
        identifier, 
        setIdentifier,
        cont,
        setCont
    } = useContext(NotesContext);

    const addNote = () => {
        if(infoCard.length !== 0 && infoCard.some(item => item.content === '')){
          Alert.alert(`Existe Nota Vazia!`, `Favor adicione um conteúdo na nota, antes de criar outra!`)
          return
        }
        const newNote: Note = {id: identifier, content: ''};
        setInfoCard([...infoCard, newNote]);
        setIdentifier(identifier + 1);
        setCont(infoCard.length);  
    }

    useEffect(() => {
        console.log('--------useAddNote-------');
        console.log('infoCard =>',infoCard.length);
        console.log('cont =>',cont);
    }, [infoCard]);

    return {addNote}
}