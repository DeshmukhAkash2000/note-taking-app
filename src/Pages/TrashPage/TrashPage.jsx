import React from "react";
import { useNoteContext } from "../../Context/NoteContext";
import { Sidebar } from "../../Component/Sidebar/sidebar";

const TrashPage = () => {
  const {
    note: { saveTrash },
    dispatchNote,
  } = useNoteContext();
  return (
    <div>
      <div className="archieve-note-container">
        <aside>
          <Sidebar />
        </aside>
        <div className="savedNotes-container">
          {saveTrash.map((item) => (
            <div className="savedNotes-second-container">
              <h3>{item.Title}</h3>
              <hr />
              <p dangerouslySetInnerHTML={{ __html: item.Value }}></p>
              <p className="SN-priority">{item.Priority}</p>
              <p>{item.Lable}</p>
              <div className="SV-icons">
                <i onClick={() =>{
                        return(
                          dispatchNote({ type: "ARCHIVE", payload: item }),
                          dispatchNote({ type: "DELETE_FROM_TRASH", payload: item })
                        )
                      }
                      } class="fa fa-archive" id="trash-archieve" >
                  <span className="trash-archive-span">archive</span>
                </i>
                <i  onClick={() =>{
                   dispatchNote({ type: "REVERSE_FROM_TRASH", payload: item });
                   dispatchNote({ type: "DELETE_FROM_TRASH", payload: item });
                }
                  } class="fa fa-mail-forward" id="reverse-trash">
                  <span className="reverse-trash-span">Reverse from Trash</span>
                </i>
                <i
                   onClick={() =>
                    dispatchNote({ type: "DELETE_FROM_TRASH", payload: item })
                  }
                  class="fa fa-trash-o"
                  id="trash-permanant-delete"
                >
                  <span className="permanent-delete-span">
                    Permanently Delete
                  </span>
                </i>
              </div>
            </div>
          ))}
        </div>
      </div>
      );
    </div>
  );
};

export { TrashPage };
