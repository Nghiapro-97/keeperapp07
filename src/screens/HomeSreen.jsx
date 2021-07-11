import React, { useState, useEffect } from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import Footer from "../components/Footer";
import Note from "../components/Note";
import CreateArea from "../components/CreateAre";
import axios from 'axios'

export const HomeSreen = ({ match }) => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchNote = async () => {
            const { data } = await axios.get('http://localhost:5000/api/notes');

            setNotes(data)
        };

        fetchNote();
    }, [])

    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div className='h-main'>
            <Container fluid>
                <Row>
                    <Col md={3} className='px-0'>
                        <Card className="card1 text-white text-center h-main">
                            <Card.Header><h1>Sticky Note</h1></Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <CreateArea onAdd={addNote} />
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted"><Footer /></Card.Footer>
                        </Card>
                    </Col>
                    <Col md={9} className='px-0'>
                        <div data-spy="scroll" data-bs-offset="0" class="scrollspy" tabindex="0">
                            <Container>
                                <Row>
                                    {notes.map((noteItem, index) => (
                                        <Col sm={12} md={6} lg={4} xl={3}>
                                            <Note
                                                key={index}
                                                id={index}
                                                title={noteItem.title}
                                                content={noteItem.content}
                                                onDelete={deleteNote}
                                            />
                                        </Col>
                                    ))}
                                </Row>
                            </Container>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomeSreen
