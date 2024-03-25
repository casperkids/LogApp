import { Link, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import React from 'react'


const SingleJournal = ({ journals }) => {
    const { journalId } = useParams()
    const journal = journals.find(journal => journal.id === journalId)

  return (
    <div className='logList'>
      <Card style={{ width: '19rem' }}>
        <h4>${journalId}</h4>
        <p>Date: {journal.date}</p>
        <img src={journal.roboIconSrc} alt={journal.id} style={{ maxWidth: '40%' }} />
        <Card.Body>
            
          <Card.Title>{journal.title}</Card.Title>
          
          <Card.Text>{journal.note}</Card.Text>
          <div>
            <Button variant="secondary" size="sm">Edit</Button>
            <Button variant="secondary" size="sm">Delete</Button>
            <Button variant="secondary" size="sm">Save</Button>
          </div>
          <div>
            <Link to='/logs'>back to Logs</Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default SingleJournal