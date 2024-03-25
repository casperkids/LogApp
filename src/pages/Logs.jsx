import { Link } from 'react-router-dom'
import JournalCard from '../components/journalCard.jsx'


const Logs = ({ journals }) => {
  console.log(journals)

  return (
    <section className='section'>
      <h2>LOGS</h2>
        <div className="log-list">
          {journals.map(journal => (
           <div key={journal.id}> {/* Add a parent element */}
            <p>Date: {journal.date}</p>
            <Link to={`/logs/${journal.id}`}>more info</Link>
          </div>
        ))}
        </div>

    </section>
  )
  }

export default Logs