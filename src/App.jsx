import React, { useState } from 'react'
import { journals  } from './data/logsData.js'
import JournalCard from './components/journalCard.jsx'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import './App.css'

const currentDate = new Date().toLocaleDateString();



function App() { 
  const [avatarSrc, setAvatarSrc] = useState('')
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('')
  const [date, setDate] = useState('')

  const generateAvatar = () => {
    const input = encodeURIComponent(title)
    const img = document.createElement('img')
    const options ={
      set: 'set1',
      bgset: 'bg1',
      format: 'jpeg',
    }
    const queryParams = new URLSearchParams(options).toString()
    const url = `https://robohash.org/${input}${queryParams}?size=200x200`;
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const avatarUrl = URL.createObjectURL(blob);
        setAvatarSrc(avatarUrl);
      })
    }
    const handleButtonClick = () => {
      generateAvatar();
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('title', title);
      console.log('note', note);
      console.log('date', date);
      console.log('Avater', avatarSrc);
    }

    return (
      <div className="container">
        <h1 className='title'>Log Journal</h1>
        <h4 className='title'>- Daily Musings with Robot -</h4>
        <div className="centered-form form-container">
          <Form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label>date</label>
              <div>
                <input type="text" value={currentDate} onChange={(event) => setDate(event.target.value)} readOnly/>
              </div>         
            </div>

            <div className='form-group'>
              <label>Write about your day</label>
              <div>
                <Form.Control as="textarea" rows={10} value={note} onChange={(event) => setNote(event.target.value)}
                  placeholder="What did you do today?&#10;What was your emotional experience?" required/>
              </div>
            </div>

            <div className='form-group'>
              <label>Title of your day</label>
              <div>
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
                <div>
                  <Button onClick={handleButtonClick} onChange={(event) => setAvatarSrc(event.target.value)} >Generate Avatar</Button>
                  {avatarSrc && <img src={avatarSrc} alt="Avatar" />}
                </div>
              </div>        
            </div>

            <Button variant="primary" type="submit">
              Create Log!
            </Button>
          </Form>
        </div>
        
        <div>
          <h5>Journal Entries</h5>
          {journals.map(journal => (<JournalCard key={journal.id} journal={journal}/>
          ))}
        </div>
      </div>
    );
}
export default App
