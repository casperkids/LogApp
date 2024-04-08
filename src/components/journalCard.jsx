import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import { Link } from "react-router-dom";

export default function JournalCard({ journal, onSeeMoreClick }) {
  const handleSeeMoreClick = () => {
    onSeeMoreClick(journal);
  };

  return (
    <Card
      className="m-3"
      style={{ width: "18rem", border: "2px solid rgb(122,102,67)" }}
    >
      <div>
        <p> {journal.date}</p>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <img
          src={journal.roboIconSrc}
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            border: "2px solid  rgb(73,81,77)",
            background: "rgb(227,227,227)",
            backgroundImage:
              "linear-gradient(0deg, rgba(227,227,227,1) 35%, rgba(255,255,255,1) 100%)",
          }}
          alt="Robo Icon"
        />
      </div>
      <Card.Body>
        <Card.Title>{journal.title}</Card.Title>
        <Card.Text>{journal.note}</Card.Text>
      </Card.Body>
    </Card>
    // <div className="container py-5">
    //   <div className="row py-5">
    //     <div className="col-12 text-center">
    //       <div className="row">
    //         <div className="col-lg-6 col-md-6 vv profile-circel-image-200">
    //           <img
    //             src={journal.roboIconSrc}
    //             className="img-fluid rounded-circle"
    //           />
    //           <div className="d-flex flex-column align-items-center justify-content-center">
    //             <h5 className="mb-3 mt-5">{journal.title}</h5>
    //             <p className="mb-4 text-muted">{journal.note}</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
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
