import { useContext } from "react";
import { NotesContext } from "../context/notesContext";

export const useAddTextArray = () => {
    const { 
        infoCard, 
        setInfoCard,
    } = useContext(NotesContext);

    const addTextArray = (id: number, text: string) => {
        setInfoCard(infoCard.map(note => note.id === id ? { ...note, content: text } : note));
    }

    return {addTextArray}
}