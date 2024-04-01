import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import { journals as defaultJournals } from "./data/logsData.js";
import JournalCard from "./components/journalCard.jsx";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./App.css";
import SingleJournal from "./pages/SingleJournal.jsx";
import Home from "./pages/Home.jsx";
import Logs from "./pages/Logs.jsx";
import SharedLayout from "./pages/SharedLayout.jsx";

const currentDate = new Date().toLocaleDateString();

function App() {
  const [roboIcon, setRoboIcon] = useState("");
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [date, setDate] = useState("");
  const [journals, setJournals] = useState(defaultJournals);

  const updateJournal = (updatedJournal) => {
    const updatedJournals = journals.map((journal) =>
      journal.id === updatedJournal.id ? updatedJournal : journal
    );
    setJournals(updatedJournals);
  };
  // const [showSingleJournal, setShowSingleJournal] = useState(false);
  // const [selectedJournal, setSelectedJournal] = useState(null);

  const generateRoboIcon = () => {
    const input = encodeURIComponent(title);
    // const img = document.createElement('img')
    const options = {
      set: "set1",
      bgset: "bg1",
      format: "jpeg",
    };
    const queryParams = new URLSearchParams(options).toString();
    const url = `https://robohash.org/${input}${queryParams}?size=200x200`;

    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const roboIconUrl = URL.createObjectURL(blob);
        setRoboIcon(roboIconUrl);
      });
  };
  const handleButtonClick = () => {
    generateRoboIcon();
  };

  const handleAddJournal = (event) => {
    event.preventDefault();

    // Epoch timestamp
    const timestamp = new Date().getTime();
    const currentDate = new Date().toISOString().split("T")[0];

    const newJournal = {
      id: timestamp.toString(),
      title: title,
      note: note,
      date: currentDate,
      roboIconSrc: roboIcon,
    };
    // Update the journals array with the new entry
    setJournals((prevJournals) => [newJournal, ...prevJournals]);

    localStorage.setItem("journals", JSON.stringify([newJournal, ...journals]));

    // Reset form fields
    setNote("");
    setTitle("");
    setDate("");
    setRoboIcon("");
  };

  return (
    <BrowserRouter basename="/LogApp">
      <nav>NavBar</nav>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <Home
                currentDate={currentDate}
                handleAddJournal={handleAddJournal}
                setNote={setNote}
                note={note}
                title={title}
                setTitle={setTitle}
                roboIcon={roboIcon}
                handleButtonClick={handleButtonClick}
                setRoboIcon={setRoboIcon}
                journals={journals}
              />
            }
          />
          <Route path="logs" element={<Logs journals={journals} />} />
          <Route
            path="logs/:journalId"
            element={
              <SingleJournal
                journals={journals}
                updateJournal={updateJournal}
              />
            }
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <footer></footer>
    </BrowserRouter>
  );
}
export default App;
