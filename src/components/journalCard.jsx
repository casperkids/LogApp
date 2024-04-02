import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import { Link } from "react-router-dom";

export default function JournalCard({ journal, onSeeMoreClick }) {
  const handleSeeMoreClick = () => {
    onSeeMoreClick(journal);
  };

  return (
    <div className="container py-5">
      <div className="row py-5">
        <div className="col-12 text-center">
          <div className="row">
            <div className="col-lg-6 col-md-6 vv profile-circel-image-200">
              <img
                src={journal.roboIconSrc}
                className="img-fluid rounded-circle"
              />
              <div className="d-flex flex-column align-items-center justify-content-center">
                <h5 className="mb-3 mt-5">{journal.title}</h5>
                <p className="mb-4 text-muted">{journal.note}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <Card style={{ width: "19rem" }}>
    //   <p>Date: {journal.date}</p>
    //   <img
    //     src={journal.roboIconSrc}
    //     alt={journal.id}
    //     style={{
    //       maxWidth: "40%",
    //       height: "100px",
    //       borderRadius: "50%",
    //       border: "1px solid  #808080",
    //       display: "block",
    //       margin: "0 auto",
    //     }}
    //   />
    //   <Card.Body>
    //     <Card.Title>{journal.title}</Card.Title>

    //     <Card.Text>{journal.note}</Card.Text>
    //   </Card.Body>
    // </Card>
  );
}
