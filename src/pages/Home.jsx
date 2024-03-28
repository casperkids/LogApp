import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import JournalCard from "../components/journalCard.jsx";
import { journals } from "../data/logsData.js";
import ActivityCalendar from "react-activity-calendar";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Home = ({
  currentDate,
  handleAddJournal,
  setDate,
  note,
  setNote,
  title,
  setTitle,
  roboIcon,
  handleButtonClick,
  setRoboIcon,
  journals,
}) => {
  const topJournals = journals.slice(0, 4);

  //calender
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;

    return contributions.filter((activity) => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  const data = selectLastHalfYear(journals)
    .map((journal) => ({
      date: journal.date,
      count: 1, //count??
      level: 2,
    }))
    .reverse();

  return (
    <section className="section">
      <h2>HOME ROUTE Page</h2>
      <ActivityCalendar
        fontSize={20}
        blockSize={25}
        blockRadius={6}
        data={data}
        showWeekdayLabels={true}
        renderBlock={(block, activity) =>
          React.cloneElement(block, {
            "data-tooltip-id": "react-tooltip",
            "data-tooltip-html": `${activity.count} activities on ${activity.date}`,
          })
        }
      />
      <div className="centered-form form-container">
        <Form onSubmit={(event) => handleAddJournal(event)}>
          <div className="form-group">
            <label>date</label>
            <div>
              <input
                className="centeredDate"
                type="text"
                value={currentDate}
                onChange={(event) => setDate(event.target.value)}
                readOnly
              />
            </div>
          </div>

          <div className="form-group">
            <label>Write about your day</label>
            <div>
              <Form.Control
                as="textarea"
                rows={10}
                value={note}
                onChange={(event) => setNote(event.target.value)}
                placeholder="What did you do today?&#10;What was your emotional experience?"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Title of your day</label>
            <div>
              <input
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
              <div>
                <Button
                  onClick={handleButtonClick}
                  onChange={(event) => setRoboIcon(event.target.value)}
                >
                  Generate Robot
                </Button>
                {roboIcon && <img src={roboIcon} alt="todaysRoboIcon" />}
              </div>
            </div>
          </div>
          <Button variant="primary" type="submit">
            Create Log!
          </Button>
        </Form>

        <div>
          <h5>Journal Entries</h5>
          {topJournals.map((topJournal) => (
            <JournalCard key={topJournal.id} journal={topJournal} />
          ))}
        </div>
        <ReactTooltip id="react-tooltip" />
      </div>
    </section>
  );
};
export default Home;
