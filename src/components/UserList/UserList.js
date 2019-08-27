import React, {Component} from 'react';
import {Button, Container} from 'react-bootstrap';

import { UserCard } from "../UserCard";
import { Intro } from "../Intro";

import UserData from '../../users';

import './style.css';

class UserCardList extends Component {
  state = {
    usersList: []
  };

  componentDidMount() {
    this.setState({
      usersList: UserData
    })
  }

  getSort = (dataIndex, sort) => {
    return sort && sort.dataIndex === dataIndex ?
      ` (${sort.direction})` :
      null;
  };

  handleClick = (dataIndex) => {
    const { sort } = this.state;

    const direction = sort && sort.dataIndex === dataIndex ?
      (sort.direction === 'asc' ? 'desc' : 'asc') :
      'asc';

    this.setState({
      sort: {
        dataIndex, direction
      }
    });
  };

  static sortData (usersList, sort) {
    if (sort) {
      const { dataIndex, direction } = sort;
      const dir = direction === 'asc' ? 1 : -1;

      return usersList.slice().sort((A, B) => {
        const a = A[ dataIndex ];
        const b = B[ dataIndex ];

        if (a > b) {
          return 1 * dir;
        }

        if (a < b) {
          return -1 * dir;
        }

        return 0;
      });
    }

    return usersList
  }

  render() {
    const { usersList } = this.state;
    const { sort } = this.state;

    return (
      <Container>
        <Intro/>
        <div className="sort-elm text-right mb-4">
          <p>Sort by:</p>
          <Button onClick={this.handleClick.bind(this, 'name')} variant="outline-success ml-2 mr-2">
            <strong>Name</strong>
            {this.getSort('name', sort)}
          </Button>
          <Button onClick={this.handleClick.bind(this, 'city')} variant="outline-success">
            <strong>City</strong>
            {this.getSort('city', sort)}
          </Button>
        </div>

        <div className="card-list">
          {
            UserCardList.sortData(usersList, sort).map(user => (
              <UserCard
                id={user.id}
                key={user.id}
                name={user.name}
                city={user.city}
              />
            ))
          }
        </div>
      </Container>
    )
  }
}

export default UserCardList;
