import { Link } from "react-router-dom";
import JournalCard from "../components/journalCard.jsx";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const JOURNALS_PER_PAGE = 12;

const Logs = ({ journals }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * JOURNALS_PER_PAGE;
  const endIndex = currentPage * JOURNALS_PER_PAGE;
  const currentJournals = journals.slice(startIndex, endIndex);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <section className="section">
      <div className="log-list" style={{ display: "flex", flexWrap: "wrap" }}>
        {currentJournals.map((journal) => (
          <Card
            key={journal.id}
            style={{
              width: "calc(25% - 20px)",
              margin: "8px",
            }}
          >
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
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  border: "1px solid  #7a6643",
                  display: "block",
                  margin: "0 auto",
                  background: "rgb(227,227,227)",
                  backgroundImage:
                    "linear-gradient(0deg, rgba(227,227,227,1) 35%, rgba(255,255,255,1) 100%)",
                }}
              />
              <Link to={`/logs/${journal.id}`} style={{ color: "#62a2ba" }}>
                {journal.title}
              </Link>{" "}
            </div>
          </Card>
        ))}
      </div>
      <div
        className="pagination"
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Button
          onClick={prevPage}
          disabled={currentPage === 1}
          variant="secondary"
        >
          {" "}
          Previous Page
        </Button>
        <Button
          onClick={nextPage}
          disabled={endIndex >= journals.length}
          style={{ marginLeft: "10px" }}
          variant="secondary"
        >
          {" "}
          Next Page
        </Button>
      </div>
    </section>
  );
};

export default Logs;
