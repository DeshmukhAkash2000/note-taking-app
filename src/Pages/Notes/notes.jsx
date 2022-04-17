import "./notes.css"
import { useState } from "react";
import { useInputContext } from "../../Component/context/inputContext";
import { SingleNote } from "../../Component/Single-Notes/single-note";
import { Sidebar } from "../../Component/Sidebar/sidebar";
import { Form } from "../Form/form";

const Notes = () => {
  const [createBtn, setCreateBtn] = useState(false);
  const { dataOfNodes, dispatchNoteData } = useInputContext();

  return (
  
        <div className='notes-page-main-container'>
          <div>
            <Sidebar/>
          </div>
          <div className='home-input-and-btn-container'>
            <input type="text" placeholder='Search....' autoFocus/>
            <button
            className="create-notes-btn"
            onClick={() => setCreateBtn(true)}
          >
            Create New
          </button>
        {createBtn && <Form closeForm={{ setCreateBtn }} />}
        {dataOfNodes.map((obj) => {
          return (
            <>
              <SingleNote data={{ obj }} />
            </>
          );
        })}
        </div>
      </div>
  );
};

export { Notes };
