import { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import Card from 'react-bootstrap/Card'
import './App.css'

const currentDate = new Date().toLocaleDateString();

function App() {
  const [avatarSrc, setAvatarSrc] = useState('')
  const [title, setTitle] = useState('');

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

  return (
    

    <div className="container">
      <h1 className='title'>Log Journal</h1>
      <div className="centered-form form-container">
        <Form>
        <div className='form-group'>
            <label>date</label>
              <div>
              <input type="text" value={currentDate} readOnly/>
            </div>         
          </div>
          <div className='form-group'>
            <label>Title of your day</label>
              <div>
              <input type="text" onChange={e => setTitle(e.target.value)} />

              <div>
              <Button onClick={handleButtonClick}>Generate Avatar</Button>
             {avatarSrc && <img src={avatarSrc} alt="Avatar" />}
             </div>
            </div>        
          </div>
          <div className='form-group'>
            <label>Write about your day</label>
              <div>
              <Form.Control as="textarea"rows={10}
              placeholder="What did you do today?&#10;What is your thought?&#10;What was your emotional experience?" required/>
              </div>
          </div>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    
      <div className='logList'>
      <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <p>Date</p>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <div>
                <Button variant="secondary" size="sm">see more</Button>
              </div>
            </Card.Body>
          </Card>
      </div>
      
    </div>

    
      



  )
};

export default App
