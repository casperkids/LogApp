import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useState } from 'react'
import { journals as defaultJournals } from './data/logsData.js'
import JournalCard from './components/journalCard.jsx'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import './App.css'
import SingleJournal from './pages/SingleJournal.jsx'
import Home from './pages/Home.jsx'
import Logs from './pages/Logs.jsx'
import SharedLayout from './pages/SharedLayout.jsx'

const currentDate = new Date().toLocaleDateString();
const JOURNALS_PER_PAGE = 3

function App() { 
  const [roboIcon, setRoboIcon] = useState('')
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('')
  const [date, setDate] = useState('')
  const [journals, setJournals] = useState(defaultJournals)
  const [currentPage, setCurrentPage] = useState(1)
  
  const [showSingleJournal, setShowSingleJournal] = useState(false)
  const [selectedJournal, setSelectedJournal] = useState(null)

  // "See More" click
  const handleSeeMoreClick = (journal) => {
    setSelectedJournal(journal)
    setShowSingleJournal(true)
  }
  
  const generateRoboIcon = () => {
    const input = encodeURIComponent(title)
    // const img = document.createElement('img')
    const options ={
      set: 'set1',
      bgset: 'bg1',
      format: 'jpeg',
    }
    const queryParams = new URLSearchParams(options).toString()
    const url = `https://robohash.org/${input}${queryParams}?size=200x200`
    
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const roboIconUrl = URL.createObjectURL(blob);
        setRoboIcon(roboIconUrl);
      })
    }
    const handleButtonClick = () => {
      generateRoboIcon();
    }


    const handleAddJournal = (event) => {
      event.preventDefault()

      // Epoch timestamp
      const timestamp = new Date().getTime()
      setDate(currentDate)

      const newJournal = {
        id: timestamp.toString(), 
        title: title,
        note: note,
        date: currentDate,
        roboIconSrc : roboIcon
      }
      // Update the journals array with the new entry
      setJournals((prevJournals) => [newJournal, ...prevJournals ])
      

      // Reset form fields
      setNote('')
      setTitle('')
      setDate('')
      setRoboIcon('')

    }

    //pagination
    const startIndex = (currentPage - 1) * JOURNALS_PER_PAGE
    const endIndex = currentPage * JOURNALS_PER_PAGE
    const currentJournals = journals.slice(startIndex, endIndex)
    
    const nextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1)
      }
    const prevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1)
      }

    return (

      <BrowserRouter>
          <nav>Our NavBar</nav>
          <Routes>
            <Route path='/' element={<SharedLayout />} >
              <Route index element={<Home />} />
              <Route path='logs' element={<Logs journals={journals} />} />
              <Route path='logs/:journalId' element={<SingleJournal journals={journals} />} />
              <Route path='*' element={<Error />} />
            </Route>
          </Routes>
          <footer> Log Footer</footer>
       </BrowserRouter>


      // <div className="container">
      //   <h1 className='title'>Robo Log</h1>
      //   <h4 className='title'>- Daily Musings with Robot -</h4>
      //   <hr className="border-top border-secondary"style={{ marginTop: '30px' }} /> 
      //   <div className="centered-form form-container">
      //     <Form onSubmit={(event) => handleAddJournal(event)}>
      //       <div className='form-group'>
      //         <label>date</label>
      //         <div>
      //           <input className="centeredDate" type="text" value={currentDate} onChange={(event) => setDate(event.target.value)} readOnly/>
      //         </div>         
      //       </div>

      //       <div className='form-group'>
      //         <label>Write about your day</label>
      //         <div>
      //           <Form.Control as="textarea" rows={10} value={note} onChange={(event) => setNote(event.target.value)}
      //             placeholder="What did you do today?&#10;What was your emotional experience?" required/>
      //         </div>
      //       </div>

      //       <div className='form-group'>
      //         <label>Title of your day</label>
      //         <div>
      //           <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      //           <div>
      //             <Button onClick={handleButtonClick} onChange={(event) => setRoboIcon(event.target.value)} >Generate Robot</Button>
      //             {roboIcon &&  <img src={roboIcon} alt="todaysRoboIcon" />}
      //           </div>
      //         </div>        
      //       </div>

      //       <Button variant="primary" type="submit">
      //         Create Log!
      //       </Button>
      //     </Form>
      //   </div>
        
      //   <div>
      //     <h5>Journal Entries</h5>
      //     {currentJournals.map(journal => (<JournalCard key={journal.id} journal={journal} onSeeMoreClick={handleSeeMoreClick} />
      //     ))}
      //   </div>
      //   <div className="pagination">
      //     <Button onClick={prevPage} disabled={currentPage === 1}>
      //       Previous Page
      //     </Button>
      //     <Button onClick={nextPage} disabled={endIndex >= journals.length}>
      //       Next Page
      //     </Button>
      //     {showSingleJournal && <SingleJournal journal={selectedJournal} />}
      // </div>
      // </div>

    
    )
}
export default App
