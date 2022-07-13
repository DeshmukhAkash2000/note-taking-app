import { createContext, useContext, useReducer } from "react";
import { noteReducer, initialValue } from "../Reducers/NoteReducer";
import {filterInitialContent, filterNoteContentReducer} from "../Reducers/FilterNotes"

const noteContext = createContext();
const useNoteContext = () => useContext(noteContext);

const NoteContextProvider = ({children}) => {
    const [note, dispatchNote] = useReducer(noteReducer, initialValue);
    const [filterNotes, dispatchFilterNotes] = useReducer(filterNoteContentReducer ,filterInitialContent)


    return(
        <noteContext.Provider value={{note, dispatchNote, filterNotes, dispatchFilterNotes}}>
            {children}
        </noteContext.Provider>
    )
}
export{useNoteContext, NoteContextProvider}