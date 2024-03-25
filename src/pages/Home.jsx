import { Link, Outlet } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import JournalCard from "../components/journalCard.jsx";
import  ActivityCalendar  from "react-activity-calendar";

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
  return (
    <section className="section">
      <h2>HOME ROUTE Page</h2>
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
      </div>

      <ActivityCalendar fontSize={20}
        blockSize={22}
        blockRadius={7} data={[]} showWeekdayLabels={true} />

    </section>
  );
};
export default Home;
