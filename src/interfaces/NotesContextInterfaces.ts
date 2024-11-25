import { Note } from "./note";

export interface NotesContextInterfaces {
    infoCard: Note[];
    setInfoCard: (notes: Note[]) => void;
    infoCardClone: Note[];
    setInfoCardClone: (notes: Note[]) => void;
    listDone: Note[];
    setListDone: (notes: Note[]) => void;
    identifier: number;
    setIdentifier: (id: number) => void;
    cont: number;
    setCont: (id: number) => void;
}