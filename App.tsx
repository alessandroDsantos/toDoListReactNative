import { NotesProvider } from './src/context/notesContext';
import { Home } from './src/screens/Home';

export default function App(){
  return(
    <NotesProvider>
      <Home />
    </NotesProvider>
  );
}



