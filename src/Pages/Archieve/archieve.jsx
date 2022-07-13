import React from "react";
import { useNoteContext } from "../../Context/NoteContext";
import { Sidebar } from "../../Component/Sidebar/sidebar";

const Archieve = () => {
  const { note: {saveArchieve} } = useNoteContext();
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
                  <i class="fa fa-edit"></i>
                  <i class="fa fa-trash-o"></i>
                </div>
              </div>
            ))}



          </div>
    </div>
  );
};

export { Archieve };
