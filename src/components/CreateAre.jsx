import React, { useState } from 'react'
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

const CreateArea = (props) => {
    const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    function expand() {
        setExpanded(true);
    }

    return (
        <div className='p-3'>
            <form className="create-note">
                <div className="form-group mx-auto">
                    {isExpanded && (
                        <input
                            name="title"
                            onChange={handleChange}
                            value={note.title}
                            className="form-control"
                            id="title"
                            placeholder="title" />
                    )}
                    <textarea
                        className="form-control textare"
                        name="content"
                        rows={isExpanded ? 3 : 1}
                        onClick={expand}
                        onChange={handleChange}
                        value={note.content}
                        id="content"
                        placeholder='Take a note...' />
                    <Zoom in={isExpanded}>
                        <Fab onClick={submitNote}>
                            <AddIcon />
                        </Fab>
                    </Zoom>
                </div>
            </form>
        </div>
    )

}

export default CreateArea