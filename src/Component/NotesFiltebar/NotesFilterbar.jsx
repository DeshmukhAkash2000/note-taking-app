import React from "react";
import { useNoteContext } from "../../Context/NoteContext";
import "./NoteFilterbar.css";

const NotesFilterbar = () => {
  const { filterNotes, dispatchFilterNotes } = useNoteContext();
  return (
    <div className="filterbar-main-container">
      <h2>Filterbar</h2>
      <section>
        <aside className="filter-by-priority">
          <h3>ByPriority</h3>
          <label htmlFor="">
            <input
              onClick={() =>
                dispatchFilterNotes({ type: "LOW", payload: "LOW" })
              }
              type="radio"
              name="priority"
            />
            Low
          </label>
          <label htmlFor="">
            <input
              onClick={() =>
                dispatchFilterNotes({ type: "MEDIUM", payload: "MEDIUM" })
              }
              type="radio"
              name="priority"
            />
            Medium
          </label>
          <label htmlFor="">
            <input
              onClick={() =>
                dispatchFilterNotes({ type: "HIGH", payload: "HIGH" })
              }
              type="radio"
              name="priority"
            />
            High
          </label>
        </aside>
        <aside className="filter-by-priority">
          <h3>ByLable</h3>
          <label htmlFor="">
            <input
              onClick={() =>
                dispatchFilterNotes({ type: "WORK", payload: "WORK" })
              }
              type="radio"
              name="lable"
            />
            Work
          </label>
          <label htmlFor="">
            <input
              onClick={() =>
                dispatchFilterNotes({ type: "BUSSINESS", payload: "BUSSINESS" })
              }
              type="radio"
              name="lable"
            />
            Bussiness
          </label>
          <label htmlFor="">
            <input
              onClick={() =>
                dispatchFilterNotes({ type: "HEALTH", payload: "HEALTH" })
              }
              type="radio"
              name="lable"
            />
            Health
          </label>
          <label htmlFor="">
            <input
              onClick={() =>
                dispatchFilterNotes({ type: "BIRTHDAY", payload: "BIRTHDAY" })
              }
              type="radio"
              name="lable"
            />
            Birthday
          </label>
          <label htmlFor="">
            <input
              onClick={() =>
                dispatchFilterNotes({ type: "OTHERS", payload: "OTHERS" })
              }
              type="radio"
              name="lable"
            />
            Others
          </label>
        </aside>
      </section>
    </div>
  );
};

export { NotesFilterbar };
