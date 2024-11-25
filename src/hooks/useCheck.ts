import { useContext } from "react";
import { NotesContext } from "../context/notesContext";
import { Note } from "../interfaces/note";

export const useCheck = () => {
    const { 
        infoCardClone,
        setInfoCardClone,
        listDone,
        setListDone,
    } = useContext(NotesContext);

    const check = (item: Note, option: boolean) => {
        if(option){
            setInfoCardClone(infoCardClone.filter(info => info.id !== item.id));  
            setListDone([...listDone, {...item, selected: true}]);
        } else {
            setListDone(listDone.filter(info => info.id !== item.id));
            setInfoCardClone([...infoCardClone, {...item, selected: false}]);
        }
    }

    return {check}
}