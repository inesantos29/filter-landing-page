import React from 'react';
import { Card, Badge } from 'react-bootstrap';

import { UserCardInfo } from "../UserCardInfo";

import './style.css';

function UserCard({ id, name, city }) {
  const emoji = ['👤'];

  return (
      <Card className="user-card" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={`https://api.adorable.io/avatars/100/${id}`} />
          <Card.Body>
              <h5>{name}</h5>
              <p className="mb-2">City</p>
              <Badge className="p-2 mb-3" variant="light">{city}</Badge>
              <div className="user-card__students">
                <UserCardInfo emoji={emoji}/>
              </div>
          </Card.Body>
      </Card>
  );
}

export default UserCard;

