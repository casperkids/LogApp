import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import React from 'react'
import { Link } from 'react-router-dom'



export default function JournalCard({ journal, onSeeMoreClick }) {
  const handleSeeMoreClick = () => {
  onSeeMoreClick(journal)
  }

  
  return (
    <div className='logList'>
      <Card style={{ width: '19rem' }}>
        <p>Date: {journal.date}</p>
        <img src={journal.roboIconSrc} alt={journal.id} style={{ maxWidth: '40%' }} />
        <Card.Body>
          <Card.Title>{journal.title}</Card.Title>
          
          <Card.Text>{journal.note}</Card.Text>
          <div>
            {/* <button onClick={() => onSeeMoreClick(journal)}>See More</button> */}
            {/* <Button variant="secondary" size="sm" onClick={handleSeeMoreClick}>see more</Button> */}
            {/* <Button variant="secondary" size="sm">Delete</Button> */}
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

