import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import JournalCard from "../components/journalCard.jsx";
import { useState, useEffect } from "react";

const SingleJournal = ({ journals, updateJournal }) => {
  const { journalId } = useParams();
  const [editedTitle, setEditedTitle] = useState("");
  const [editedNote, setEditedNote] = useState("");
  const journal = journals.find((journal) => journal.id === journalId);

  const handleEdit = () => {
    setEditedTitle(journal.title);
    setEditedNote(journal.note);
  };

  const handleChangeTitle = (event) => {
    setEditedTitle(event.target.value);
  };

  const handleChangeNote = (event) => {
    setEditedNote(event.target.value);
  };

  const handleSave = () => {
    const updatedJournal = { ...journal, title: editedTitle, note: editedNote };
    updateJournal(updatedJournal);
    console.log("Saving edited journal:", editedTitle, editedNote);
  };

  return (
    <section className="section">
      <Card style={{ width: "18rem" }}>
        <Card.Text>{journal.date}</Card.Text>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "10vh",
          }}
        >
          <Card.Img
            variant="top"
            src={journal.roboIconSrc}
            alt={journal.id}
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              border: "2px solid #000",
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>
        <Card.Body>
          <Card.Title>
            {editedTitle ? (
              <input
                type="text"
                value={editedTitle}
                onChange={handleChangeTitle}
              />
            ) : (
              journal.title
            )}
          </Card.Title>
          <Card.Text>
            {editedNote ? (
              <textarea value={editedNote} onChange={handleChangeNote} />
            ) : (
              journal.note
            )}
          </Card.Text>
          <Button variant="secondary" size="sm" onClick={handleEdit}>
            Edit
          </Button>
          <Button variant="secondary" size="sm" onClick={handleSave}>
            Save
          </Button>
        </Card.Body>
        <div>
          <Link to="/logs">back to Logs</Link>{" "}
        </div>
      </Card>
    </section>
  );
};

export default SingleJournal;
