import { createContext, useContext, useReducer } from "react";
import { noteReducer, initialValue } from "../Reducers/NoteReducer";

const noteContext = createContext();
const useNoteContext = () => useContext(noteContext)

const NoteContextProvider = ({children}) => {
    const [note, dispatchNote] = useReducer(noteReducer, initialValue);


    return(
        <noteContext.Provider value={{note, dispatchNote}}>
            {children}
        </noteContext.Provider>
    )
}
export{useNoteContext, NoteContextProvider}