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
  const topJournals = journals.slice(0, 3);

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

  const data = journals
    .reduce((previousValue, currentValue) => {
      const existingLog = previousValue.find(
        (item) => item.date === currentValue.date
      );
      if (existingLog) {
        existingLog.count += 1;
        existingLog.level = getLevel(existingLog.count);
      } else {
        previousValue.push({
          date: currentValue.date,
          count: 1,
          level: 1,
        });
      }
      return previousValue;
    }, [])
    .reverse();
  function getLevel(count) {
    if (count === 1) {
      return 1;
    } else if (count >= 1 && count <= 2) {
      return 2;
    } else if (count >= 3 && count <= 4) {
      return 3;
    } else if (count >= 5 && count <= 6) {
      return 4;
    } else {
      return 5;
    }
  }

  // const data = selectLastHalfYear(journals)
  //   .map((journal) => ({
  //     date: journal.date,
  //     count: 1, //count??
  //     level: 2,
  //   }))
  //   .reverse();

  return (
    <section className="section">
      <div className="calender_container">
        <h3 className="activity-title">Your Activities</h3>
        <ActivityCalendar
          fontSize={18}
          blockSize={20}
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
      </div>

      <div className="centered-form form-container">
        <Form onSubmit={(event) => handleAddJournal(event)}>
          <div className="form-group">
            <label>Date</label>
            <div>
              <input
                className="centeredDate form-control"
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
              <textarea
                className="form-control"
                style={{ width: "100%" }}
                rows={5}
                value={note}
                onChange={(event) => setNote(event.target.value)}
                placeholder="What did you do today?&#10;What was your emotional experience?"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Title of your day</label>
            <div className="d-flex align-items-center">
              <input
                className="form-control flex-grow-1"
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                required
              />
              <div className="ml-2">
                <div
                  style={{ width: "100%" }}
                  className="d-flex align-items-center"
                >
                  {title.trim() && (
                    <Button
                      onClick={handleButtonClick}
                      variant="light"
                      style={{ margin: "15px" }}
                    >
                      Generate Robot
                    </Button>
                  )}
                </div>
              </div>
            </div>
            <div>
              {roboIcon && (
                <img
                  className="ml-2"
                  src={roboIcon}
                  alt="todaysRoboIcon"
                  style={{
                    // width: "100px",
                    // height: "100px",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    // border: "1px solid  #808080",
                    display: "block",
                    margin: "0 auto",
                  }}
                />
              )}
            </div>
          </div>
          <Button className="mt-3" variant="light" type="submit">
            Create Log!
          </Button>
        </Form>
      </div>

      <div className="recent-entry-container">
        <h5>Recent Entries</h5>
        <div className="d-flex justify-content-between">
          {topJournals.map((topJournal) => (
            <JournalCard key={topJournal.id} journal={topJournal} />
          ))}
        </div>
      </div>
      <ReactTooltip id="react-tooltip" />
    </section>
  );
};
export default Home;
