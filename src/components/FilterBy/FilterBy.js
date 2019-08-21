import React, {Component} from 'react';
import { ToggleButtonGroup, ToggleButton  } from 'react-bootstrap';

import "./style.css"

class FilterBy extends Component {
  render() {
    return (
      <>
        <ToggleButtonGroup type="checkbox">
          <ToggleButton value={1}>Option 1</ToggleButton>
          <ToggleButton value={2}>Option 2</ToggleButton>
          <ToggleButton value={3}>Option 3</ToggleButton>
        </ToggleButtonGroup>
      </>
    )
  }
}

export default FilterBy;
