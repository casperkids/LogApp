import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import React from 'react'
import { journals } from '../data/logsData.js'


export default function JournalCard({ journal }) {
  return (
    <div className='logList'>
      <Card style={{ width: '18rem' }}>
        <img src={journal.roboIcon} alt={journal.id} style={{ maxWidth: '80%' }} />
        <Card.Body>
          <Card.Title>{journal.title}</Card.Title>
          <p>Date: {journal.date}</p>
          <Card.Text>{journal.text}</Card.Text>
          <div>
            <Button variant="secondary" size="sm">Edit</Button>
            <Button variant="secondary" size="sm">Delete</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

