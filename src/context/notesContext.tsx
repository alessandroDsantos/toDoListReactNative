import { createContext, ReactNode, useState } from 'react';
import { Note } from '../interfaces/note';
import { NotesContextInterfaces } from '../interfaces/NotesContextInterfaces';

export const NotesContext = createContext<NotesContextInterfaces>({} as NotesContextInterfaces);

export const NotesProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const [infoCard, setInfoCard] = useState<Note[]>([]);
    const [identifier, setIdentifier] = useState<number>(0);
    const [infoCardClone, setInfoCardClone] = useState<Note[]>([]);
    const [listDone, setListDone] = useState<Note[]>([]);
    const [cont, setCont] = useState<number>(infoCard.length);

    return(
        <NotesContext.Provider value={{
            infoCard,
            setInfoCard,
            infoCardClone,
            setInfoCardClone,
            listDone,
            setListDone,
            identifier,
            setIdentifier,
            cont,
            setCont
        }}>
            {children}
        </NotesContext.Provider>
    );
}  