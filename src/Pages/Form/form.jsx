import "./form.css";
import { useState } from "react";
import { useInputContext } from "../../Component/context/inputContext";

const Form = ({ closeForm }) => {



    const { setCreateBtn } = closeForm;

    const [newNotesValue, setNewNotesValue] = useState(
        {
            title: "",
            content: "",
            labels: [],
            date: null,
            pined: 0,
            priority: "",
            color: "",
            titleText:[],
            contentText:[],
            trash: false,
            archive: false
        });

    

    const [Priority, setPriority] = useState("");


    const { dataOfNodes, dispatchNoteData } = useInputContext();


    // text Editer for the title
    const textEditerForTitle = (style) => {
        if (!newNotesValue.titleText.includes(style)){
            setNewNotesValue({ ...newNotesValue, titleText:[...newNotesValue.titleText,style]});
        }else{
            const newTitleText = newNotesValue.titleText.filter(item => item !== style);
            setNewNotesValue({ ...newNotesValue, titleText:[...newTitleText]});
        };   
    };

    // text Editer for the content
    const textEditerForContent = (style) => {
        if (!newNotesValue.contentText.includes(style)){
            setNewNotesValue({ ...newNotesValue, contentText:[...newNotesValue.contentText,style]});
        }else{
            const newContentText = newNotesValue.contentText.filter(item => item !== style);
            setNewNotesValue({ ...newNotesValue, contentText:[...newContentText]});
        }; 
    };


    // for the labels
    const arrayOfLabels = ["WORK", "BUSINESS", "HEALTH", "BIRTHDAY", "OTHERS"];

    const labelFunc = labelData => {
        if (!newNotesValue.labels.includes(labelData)) {
            setNewNotesValue({ ...newNotesValue, labels: [...newNotesValue.labels, labelData] })
        } else {
            const newLabels = newNotesValue.labels.filter(item => item !== labelData);
            setNewNotesValue({ ...newNotesValue, labels: newLabels })
        }
    };


    const titleFunc = value => setNewNotesValue({ ...newNotesValue, title: value });

    const contentFunc = value => setNewNotesValue({ ...newNotesValue, content: value });



    const isTitleSame = dataOfNodes.some(item => item.title === newNotesValue.title)

    const saveFunc = () => {

        if (newNotesValue.content !== "" &&
            newNotesValue.title !== "" &&
            newNotesValue.labels[0] !== undefined) {
            if (!isTitleSame) {
                dispatchNoteData({ type: "NEW_NOTES", payload: { ...newNotesValue, priority: Priority } });
                setCreateBtn(false);
            };
        } 
    }


    return (
        <div className="create-notes-container">
            <div className="title-input-container">
                    <div className="note-title-and-btn-container">
                       <div className="notes-title">
                       <label htmlFor="title-input">TITLE</label>
                       </div>
                        <div>
                        <button className="edit-Btn bold"
                            onClick={() => textEditerForTitle("bold")}
                            >B</button>
                        <button className="edit-Btn italic"
                            onClick={() => textEditerForTitle("italic")}
                            >I</button>
                        <button className="edit-Btn underline"
                            onClick={() => textEditerForTitle("underline")}
                            >U</button>
                        <button className="edit-Btn lineThrough"
                            onClick={() => textEditerForTitle("lineThrough")}
                            >S</button>
                        </div>
                    </div>
                <input
                    className={`title-input  ${newNotesValue.titleText.join(" ")}`}
                    type="text"
                    placeholder="Title..."
                    onChange={e => titleFunc(e.target.value)}
                />
            </div>
            {isTitleSame && <p className="error-msge">You Have already used this title.!</p>}
            <div className="content-input-container">
                <div className="content-and-btn-container">
                    <label htmlFor="content-input">CONTENT</label>
                    <div>
                        <button className="edit-Btn bold"
                        onClick={() => textEditerForContent("bold")}
                        >B</button>
                        <button className="edit-Btn italic"
                        onClick={() => textEditerForContent("italic")}
                        >I</button>
                        <button className="edit-Btn underline"
                        onClick={() => textEditerForContent("underline")}
                        >U</button>
                        <button className="edit-Btn lineThrough"
                        onClick={() => textEditerForContent("lineThrough")}
                        >S</button>
                    </div>
                </div>
                <textarea
                    className={`content-input ${newNotesValue.contentText.join(" ")}`}
                    type="text"
                    placeholder="Enter note..."
                    onChange={e => contentFunc(e.target.value)}
                />
            </div>
            <div className="labels-input-container">
                <div>LABELS</div>
                <hr/>
                <div className="label-list">
                    {arrayOfLabels.map(label => {
                        return (
                            <div>
                            <span>
                                <input
                                    className="labels-input"
                                    type="checkbox"
                                    checked={newNotesValue.labels.includes(label)}
                                    onClick={() => labelFunc(label)}
            
                                />
                                <span htmlFor="labels-input">{label}</span>
                             </span>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="priority">
                <div>PRIORITY</div>
                <hr />
                <div className="priority-inputs">
                    <span>
                        <input
                            type="radio"
                            className="low"
                            name="priority"
                            onClick={() => setPriority("Low")}
                        />
                        <label htmlFor="low">LOW</label>
                    </span>
                    <span className="margin-small">
                        <input
                            type="radio"
                            className="medium"
                            name="priority"
                            onClick={() => setPriority("Medium")}
                        />
                        <label htmlFor="medium">MEDIUM</label>
                    </span>
                    <span className="margin-small">
                        <input
                            type="radio"
                            className="high"
                            name="priority"
                            onClick={() => setPriority("High")}
                        />
                        <label htmlFor="high">HIGH</label>
                    </span>
                </div>
            </div>
            <div>
                <button
                    className="save-note-btn"
                    onClick={() => saveFunc()}
                >SAVE</button>
                <button
                    className="cancel-note-btn"
                    onClick={() => setCreateBtn(false)}
                >CANCEL</button>
            </div>
        </div>
    );
};

export {Form}; 
