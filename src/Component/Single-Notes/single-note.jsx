import { useInputContext } from "../context/inputContext";
import"./single-notes.css"
const SingleNote = ({ data }) => {

    const { dataOfNodes, dispatchNoteData } = useInputContext();

    const { obj } = data;

    return (
        <div className="body-main-container" style={{ backgroundColor: obj.color }}>
            <div>
                <h3 className={obj.titleText.join(" ")}>{obj.title}</h3>
                <button
                    className={obj.pined === 1 ? "primary-color" : "normal-color"}
                    onClick={() => dispatchNoteData({ type: "PINED", payload: obj })}
                ><i className="fa fa-thumb-tack"></i></button>
            </div>
            <hr></hr>
            <div className="content-text">
                <div className={obj.contentText.join(" ")}>{obj.content}</div>
            </div>
            <div className="labels-text">
                {obj.labels.map(item => {
                    return (
                        <div className="labels">
                            {item}
                        </div>
                    );
                })}
            </div>
            <div>
                <div className="priority-text">
                    {obj.priority}
                </div>
            </div>
            <div className="date-content">
                Created on {obj.date}
            </div>
            <div className="footer-icons">
                <button><i class="fa fa-edit footer-icon"></i></button>
                <button><i class="fa fa-archive footer-icon"></i></button>
                <button><i class="fa fa-trash-o footer-icon"></i></button>
            </div>
        </div>
    );
};

export {SingleNote};