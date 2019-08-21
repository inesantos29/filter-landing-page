import React, {Component} from 'react';
import { Container } from 'react-bootstrap';

import { Intro } from '../Intro';
import { UserCard } from '../UserCard';

import "./style.css"

class UserCardList extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then((users) => {
        this.setState({users: users});
      })
  }

  render() {
    const { users } = this.state;
    return (
      <Container>
        <Intro/>
        <div className="card-list">
          {users.map(user => (
            <UserCard
              id={user.id}
              key={user.id}
              name={user.name}
              company={user.company}
            />
          ))}
        </div>
      </Container>
    )
  }
}

export default UserCardList;
