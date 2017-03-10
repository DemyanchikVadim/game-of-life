import React from 'react';

export default ({alive,  handleClick}) =>
  (
    <td
      onClick={handleClick}
      className={`${alive ? 'alive' : ''} `}
    >
    </td>
  )