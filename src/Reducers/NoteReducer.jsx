const initialValue = {
  saveNote: [],
  saveArchieve: [],
  saveTrash: [],
  saveLable: [],
  byPriority: []
};

const noteReducer = (state, action) => {
  console.log(state.saveTrash);
  switch (action.type) {
    case "SAVE":
      return action.payload.label !== ""
        ? {
            ...state,
            saveLable: [...state.saveLable, action.payload],
            saveNote: [...state.saveNote, action.payload],
          }
        : { ...state, saveNote: [...state.saveNote, action.payload] };
    case "DELETE_FROM_TRASH":
      const deleteArr = state.saveTrash.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, saveTrash: deleteArr };
    case "ARCHIVE":
        return { ...state, saveArchieve:[...state.saveArchieve, action.payload] };
    case "TRASH":
      return { ...state, saveTrash:[...state.saveTrash, action.payload] };
    case "REMOVE_DATA":
      const newArr = state.saveNote.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, saveNote: newArr };
    case "REMOVE_FROM_TRASH":
      const updateTrashArr = state.saveTrash.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, saveTrash: updateTrashArr };
    case "REMOVE_FROM_ARCHIEVE":
      const updateArchieve = state.saveArchieve.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, saveArchieve: updateArchieve };
    case "REVERSE_FROM_TRASH":
      return { ...state, saveNote: [...state.saveNote, action.payload] };
    case "DELETE":
      const filteredData = state.saveNote.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, saveNote: filteredData };

    default:
      return state;
  }
};

export { noteReducer, initialValue };
