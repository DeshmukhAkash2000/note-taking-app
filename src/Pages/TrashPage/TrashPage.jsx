import React from 'react';
import { useNoteContext } from '../../Context/NoteContext';
import { Sidebar } from '../../Component/Sidebar/sidebar';

const TrashPage = () => {
    const {note:{saveTrash},  dispatchNote} = useNoteContext();
    console.log(saveTrash, "trash");
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
                  <i class="fa fa-edit"></i>
                  <i  onClick={() =>
                      dispatchNote({ type: "DELETE_FROM_TRASH", payload: item })
                    } class="fa fa-trash-o"></i>
                </div>
              </div>
            ))}
          </div>
    </div>
  );
    </div>
  )
}


export{TrashPage}

