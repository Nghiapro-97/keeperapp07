import React from "react";
import { Card } from 'react-bootstrap'
import DeleteIcon from "@material-ui/icons/Delete";

const Note = (props) => {
    const today = new Date(),
        date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();;

    function handleClick() {
        props.onDelete(props.id);
    }

    return (
        <Card className='bg-white my-3'>
            <Card.Header className="fw-bold bg-warning text-white p-2 text-center">{props.title}</Card.Header>
            <Card.Body className='p-3'>
                <Card.Text>
                    {props.content}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex align-items-center p-0">
                <span className='me-auto ps-3'><small>{date}</small></span>
                <button className="bg-white" onClick={handleClick}><DeleteIcon /></button>
            </Card.Footer>
        </Card>
    );
}

export default Note;