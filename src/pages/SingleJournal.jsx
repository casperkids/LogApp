import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";
import JournalCard from "../components/journalCard.jsx";

const SingleJournal = ({ journals, updateJournal }) => {
  const { journalId } = useParams();
  const [editedTitle, setEditedTitle] = useState("");
  const [editedNote, setEditedNote] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const [originalJournal, setOriginalJournal] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const journal = journals.find((journal) => journal.id === journalId);
    setOriginalJournal(journal);
    setEditedTitle(journal.title);
    setEditedNote(journal.note);
  }, [journals, journalId]);

  const handleEdit = () => {
    setIsEditing(true);
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
    const updatedJournal = {
      ...originalJournal,
      title: editedTitle,
      note: editedNote,
    };
    updateJournal(updatedJournal);
    setIsSaved(true);
    setIsEditing(false);
    console.log("Saving edited journal:", editedTitle, editedNote);
  };

  return (
    <section className="section">
      <Card style={{ width: "18rem" }}>
        <Card.Text>{originalJournal && originalJournal.date}</Card.Text>
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
            src={originalJournal && originalJournal.roboIconSrc}
            alt={originalJournal && originalJournal.id}
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              border: "2px solid #7a6643",
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>
        <Card.Body>
          <Card.Title>
            {isEditing ? (
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
              originalJournal && originalJournal.title
            )}
          </Card.Title>
          <Card.Text>
            {isEditing ? (
              <textarea value={editedNote} onChange={handleChangeNote} />
            ) : (
              originalJournal && originalJournal.note
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
          <Link to="/logs" style={{ color: "#62a2ba" }}>
            back to Logs
          </Link>{" "}
        </div>
      </Card>
    </section>
  );
};

export default SingleJournal;
