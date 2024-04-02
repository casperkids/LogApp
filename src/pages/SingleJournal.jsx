import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import JournalCard from "../components/journalCard.jsx";
import { useState } from "react";

const SingleJournal = ({ journals, updateJournal }) => {
  const { journalId } = useParams();
  const [editedTitle, setEditedTitle] = useState("");
  const [editedNote, setEditedNote] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const journal = journals.find((journal) => journal.id === journalId);

  const handleEdit = () => {
    setEditedTitle(journal.title);
    setEditedNote(journal.note);
    setIsSaved(false);
  };

  const handleChangeTitle = (event) => {
    setEditedTitle(event.target.value);
    setIsSaved(false);
  };

  const handleChangeNote = (event) => {
    setEditedNote(event.target.value);
    setIsSaved(false); //
  };

  const handleSave = () => {
    const updatedJournal = { ...journal, title: editedTitle, note: editedNote };
    updateJournal(updatedJournal);
    setIsSaved(true);
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
                style={{
                  height: isSaved ? "auto" : "50px",
                  width: "210px",
                  fontSize: "18px",
                }}
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
          <div>
            <Button
              variant="secondary"
              size="sm"
              onClick={handleEdit}
              className="edit-save-btn"
            >
              Edit
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={handleSave}
              className="edit-save-btn"
            >
              Save
            </Button>
            <div className="success_txt">
              {isSaved && <p>Successfully updated!</p>}
            </div>
          </div>
        </Card.Body>
        <div>
          <Link to="/logs">back to Logs</Link>{" "}
        </div>
      </Card>
    </section>
  );
};

export default SingleJournal;
