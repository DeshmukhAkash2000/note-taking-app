import React from "react";
import { useNoteContext } from "../../Context/NoteContext";
import { Sidebar } from "../../Component/Sidebar/sidebar";

const Archieve = () => {
  const {
    note: { saveArchieve },
    dispatchNote,
  } = useNoteContext();
  return (
    <div className="archieve-note-container">
      <aside>
        <Sidebar />
      </aside>
      <div className="savedNotes-container">
        {saveArchieve.map((item) => (
          <div className="savedNotes-second-container">
            <h3>{item.Title}</h3>
            <hr />
            <p dangerouslySetInnerHTML={{ __html: item.Value }}></p>
            <p className="SN-priority">{item.Priority}</p>
            <p>{item.Lable}</p>
            <div className="SV-icons">
              <i
                onClick={() => {
                  dispatchNote({ type: "TRASH", payload: item }),
                  dispatchNote({ type: "REMOVE_DATA", payload: item })
                }}
                class="fa fa-trash-o"
              ></i>
              <i
                onClick={() =>{
                  dispatchNote({ type: "REVERSE_FROM_TRASH", payload: item });
                  dispatchNote({ type: "REMOVE_DATA", payload: item });
               }}
                class="fa fa-mail-forward"
                id="reverse-trash"
              >
                <span className="reverse-trash-span">
                  Reverse from Archieve
                </span>
              </i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Archieve };
