import React from 'react';

const UserCardInfo = ({emoji}) => (
  <>
    <p>Students so far</p>
    <ul>
      {emoji.map(item =>(
        <>
          <li key={item}>{emoji}</li>
          <li>{emoji}</li>
          <li>{emoji}</li>
          <li>{emoji}</li>
        </>
      ))}
    </ul>
  </>
);

export default UserCardInfo;

