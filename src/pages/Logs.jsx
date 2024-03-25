import { Link } from "react-router-dom";
import JournalCard from "../components/journalCard.jsx";
import { useState } from "react";
import Button from "react-bootstrap/Button";

const JOURNALS_PER_PAGE = 3;

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
      <h2>LOGS</h2>
      <div className="log-list">
        {currentJournals.map((journal) => (
          <div key={journal.id}>
            <p>Date: {journal.date}</p>
            <Link to={`/logs/${journal.id}`}>more info</Link>
          </div>
        ))}
      </div>
      <div className="pagination">
        <Button onClick={prevPage} disabled={currentPage === 1}>
          Previous Page
        </Button>
        <Button onClick={nextPage} disabled={endIndex >= journals.length}>
          Next Page
        </Button>
      </div>
    </section>
  );
};

export default Logs;
