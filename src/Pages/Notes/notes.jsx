import "./notes.css";
import { useState } from "react";
import { Sidebar } from "../../Component/Sidebar/sidebar";
import { useNoteContext } from "../../Context/NoteContext";
import { v4 as uuid } from "uuid";
import { NotesFilterbar } from "../../Component/NotesFiltebar/NotesFilterbar";

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
  const [bgColour, setBgColour] = useState("");

  const data = {
    Title: title,
    Value: value,
    Lable: lable,
    Priority: priority,
    bgColour: bgColour,
    id: uuid(),
  };

  const {
    note: { saveNote },
    dispatchNote,
    filterNotes: { byPriority, byLable },
  } = useNoteContext();

  const valueClickHandler = () => {
    dispatchNote({ type: "SAVE", payload: data });
    setValue("");
    setTitle("");
    setLable("");
    setPriority("");
    setBgColour("");
  };

  const noteEditFunction = (item) => {
    setValue(item.Value);
    setTitle(item.Title);
    setLable(item.Label);
    setPriority(item.Priority);
    setBgColour(item.bgColour);
    dispatchNote({ type: "REMOVE_DATA", payload: item });
  };

  const filterContent = () => {
    let sortData = saveNote;

    if (byPriority === "LOW") {
      sortData = sortData.filter((e) => e.Priority === "LOW");
    }
    if (byPriority === "MEDIUM") {
      sortData = sortData.filter((e) => e.Priority === "MEDIUM");
    }
    if (byPriority === "HIGH") {
      sortData = sortData.filter((e) => e.Priority === "HIGH");
    }
    if (byLable === "WORK") {
      sortData = sortData.filter((e) => e.Lable === "Work");
    }
    if (byLable === "BUSSINESS") {
      sortData = sortData.filter((e) => e.Lable === "Business");
    }
    if (byLable === "HEALTH") {
      sortData = sortData.filter((e) => e.Lable === "Health");
    }
    if (byLable === "BIRTHDAY") {
      sortData = sortData.filter((e) => e.Lable === "Birthday");
    }
    if (byLable === "OTHERS") {
      sortData = sortData.filter((e) => e.Lable === "Others");
    }
    return sortData;
  };

  return (
    <>
      <div className="notes-page-main-container">
        <aside>
          <Sidebar />
        </aside>
        <div className="notes-main-container">
          <div
            style={{ backgroundColor: bgColour }}
            className="home-input-and-btn-container"
          >
            <div>
              <h4>Title</h4>
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
              <h4>Content</h4>
              <ReactQuill
                className="quill-textarea"
                modules={modules}
                formats={formats}
                placeholder="Take a note..."
                value={value || ""}
                onChange={setValue}
              />
              <div>
                <section className="sec-radio">
                  <h4>Priorities</h4>
                  <label htmlFor="high">
                    <input
                      onClick={(e) => setPriority(e.target.value)}
                      name="a"
                      id="high"
                      type="radio"
                      value="HIGH"
                    ></input>
                    High
                  </label>
                  <label htmlFor="medium">
                    <input
                      onClick={(e) => setPriority(e.target.value)}
                      name="a"
                      id="medium"
                      type="radio"
                      value="MEDIUM"
                    ></input>
                    Medium
                  </label>
                  <label htmlFor="low">
                    <input
                      onClick={(e) => setPriority(e.target.value)}
                      id="low"
                      name="a"
                      type="radio"
                      value="LOW"
                    ></input>
                    Low
                  </label>
                </section>

                <section>
                  <h4>Labels</h4>
                  <label htmlFor="work">
                    <input
                      onClick={(e) => setLable(e.target.value)}
                      type="radio"
                      name="lable"
                      value="Work"
                    ></input>
                    Work
                  </label>

                  <label htmlFor="bussiness">
                    <input
                      onClick={(e) => setLable(e.target.value)}
                      type="radio"
                      name="lable"
                      value="Bussiness"
                    ></input>
                    Bussiness
                  </label>

                  <label htmlFor="health">
                    <input
                      onClick={(e) => setLable(e.target.value)}
                      type="radio"
                      name="lable"
                      value="Health"
                    ></input>
                    Health
                  </label>

                  <label htmlFor="birthday">
                    <input
                      onClick={(e) => setLable(e.target.value)}
                      type="radio"
                      value="Birthday"
                      name="lable"
                    ></input>
                    Birthday
                  </label>

                  <label htmlFor="others">
                    <input
                      onClick={(e) => setLable(e.target.value)}
                      type="radio"
                      name="lable"
                      value="Others"
                    ></input>
                    Others
                  </label>
                </section>
                <button
                  className="create-notes-btn"
                  onClick={valueClickHandler}
                >
                  Save
                </button>
                <div className="color-btn-section">
                  <button
                    onClick={() => setBgColour("red")}
                    className="red-btn"
                  ></button>
                  <button
                    onClick={() => setBgColour("green")}
                    className="green-btn"
                  ></button>
                  <button
                    onClick={() => setBgColour("blue")}
                    className="blue-btn"
                  ></button>
                  <button
                    onClick={() => setBgColour("pink")}
                    className="pink-btn"
                  ></button>
                  <button
                    onClick={() => setBgColour("yellow")}
                    className="yellow-btn"
                  ></button>
                </div>
                <aside className="filterbar-in-notes">
                  <NotesFilterbar />
                </aside>
              </div>
            </div>
          </div>
          <div className="savedNotes-container">
            {filterContent().map((item) => (
              <div
                style={{ backgroundColor: item.bgColour }}
                className="savedNotes-second-container"
              >
                <h3>Title:{item.Title}</h3>
                <hr />
                <p dangerouslySetInnerHTML={{ __html: item.Value }}></p>
                <p className="SN-priority">{item.Priority}</p>
                <p>{item.Lable}</p>
                <div className="SV-icons">
                  <i
                    class="fa fa-edit"
                    id="note-edit-text"
                    onClick={() => noteEditFunction(item)}
                  >
                    <span className="note-edit-span">Edit</span>
                  </i>
                  <i
                    onClick={() => {
                      dispatchNote({ type: "ARCHIVE", payload: item });
                      dispatchNote({ type: "DELETE", payload: item })
                    }}
                    class="fa fa-archive" id="trash-archieve" 
                  ><span className="trash-archive-span">archive</span></i>

                  <i
                    class="fa fa-trash-o" id="note-trash-text"
                    onClick={() => {
                      return (
                        dispatchNote({ type: "TRASH", payload: item }),
                        dispatchNote({ type: "DELETE", payload: item })
                      );
                    }}
                  ><span className="note-trash-span">Move to Trash</span></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export { Notes };
