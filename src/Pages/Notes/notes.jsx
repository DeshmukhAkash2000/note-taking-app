import "./notes.css";
import { useState } from "react";
import { Sidebar } from "../../Component/Sidebar/sidebar";
import { useNoteContext } from "../../Context/NoteContext";
import { v4 as uuid } from "uuid";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Notes = () => {
  const formats = [
    "bold",
    "italic",
    "underline",
    "strike",
    "image",
    "list",
    "link",
    "clean",
    "video",
  ];
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [],
      [{ list: "ordered" }, { list: "bullet" }],
      [],
      ["image", "video", "link"],
      ["clean"],
    ],
  };

  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [lable, setLable] = useState("");
  const [priority, setPriority] = useState("");

  const data = {
    Title: title,
    Value: value,
    Lable: lable,
    Priority: priority,
    id: uuid(),
  };

  const {
    note: { saveNote },
    dispatchNote,
  } = useNoteContext();

  console.log(saveNote, "savvvvvv");

  const valueClickHandler = () => {
    dispatchNote({ type: "SAVE", payload: data });
    console.log(data);
    setValue("");
    setTitle("");
    setLable("");
    setPriority("");
  };

  return (
    <>
      <div className="notes-page-main-container">
        <div>
          <Sidebar />
        </div>
        <div className="home-input-and-btn-container">
          <input
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            className="title-input"
            type="text"
            placeholder="title..."
            autoFocus
            value={title}
          />
          <ReactQuill
            modules={modules}
            formats={formats}
            placeholder="Take a note..."
            value={value}
            onChange={setValue}
          />

          <div>
            <section className="sec-radio">
              <h4>Priorities</h4>
              <label htmlFor="high">
                <input
                  onClick={() => setPriority("High")}
                  name="a"
                  id="high"
                  type="radio"
                ></input>
                High
              </label>
              <label htmlFor="medium">
                <input
                  onClick={() => setPriority("Medium")}
                  name="a"
                  id="medium"
                  type="radio"
                ></input>
                Medium
              </label>
              <label htmlFor="low">
                <input
                  onClick={() => setPriority("Low")}
                  id="low"
                  name="a"
                  type="radio"
                ></input>
                Low
              </label>
            </section>

            <section>
              <h4>Labels</h4>
              <label htmlFor="work">
                <input onClick={() => setLable("Work")} type="checkbox"></input>
                Work
              </label>

              <label htmlFor="bussiness">
                <input
                  onClick={() => setLable("Bussiness")}
                  type="checkbox"
                ></input>
                Bussiness
              </label>

              <label htmlFor="health">
                <input
                  onClick={() => setLable("Health")}
                  type="checkbox"
                ></input>
                Health
              </label>

              <label htmlFor="birthday">
                <input
                  onClick={() => setLable("Birthday")}
                  type="checkbox"
                ></input>
                Birthday
              </label>

              <label htmlFor="others">
                <input
                  onClick={() => setLable("Others")}
                  type="checkbox"
                ></input>
                Others
              </label>
            </section>
            <button className="create-notes-btn" onClick={valueClickHandler}>
              Save
            </button>

          </div>
            <div className="savedNotes-container">
              {saveNote.map((item) => (
                <div className="savedNotes-second-container" >
                  <h3>Title:{item.Title}</h3>
                  <hr />
                  <p  dangerouslySetInnerHTML={{ __html: item.Value }}></p>
                  <p className="SN-priority">{item.Priority}</p>
                  <p>{item.Lable}</p>
                </div>
              ))}
            </div>
        </div>
      </div>
    </>
  );
};

export { Notes };
