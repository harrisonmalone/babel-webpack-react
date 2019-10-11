import React from 'react';

const List = () => {
  const array = [1, 2, 3, 4]
  return (
    <ul>
      {array.map((number, index) => <li key={index}>{number}</li>)}
    </ul>
  )
}

export default List;