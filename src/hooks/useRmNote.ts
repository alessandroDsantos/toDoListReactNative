import { useContext } from "react";
import { NotesContext } from "../context/notesContext";

export const useRmNote = () => {
    const { 
        infoCard, 
        setInfoCard,
        infoCardClone,
        setInfoCardClone,
        listDone,
        setListDone,
    } = useContext(NotesContext);

    const rmNote = (id: number) => {
        setInfoCard(infoCard.filter(item => item.id !== id));
        setInfoCardClone(infoCardClone.filter(item => item.id !== id));
        setListDone(listDone.filter(item => item.id !== id));
    }

    return {rmNote}
}