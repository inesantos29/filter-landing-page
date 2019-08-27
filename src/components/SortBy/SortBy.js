import React from 'react';
import {  Button } from 'react-bootstrap';

import './style.css';

function SortBy({handleClick , getSort}) {
  return (
    <div className="sort-elm">
      <p>Sort by:</p>
      <Button onClick={handleClick} variant="outline-success ml-2 mr-2">Name{getSort}</Button>
      <Button onClick={handleClick} variant="outline-success">City{getSort}</Button>
    </div>

  );
}

export default SortBy;

