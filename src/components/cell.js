import React from 'react';

export default ({alive}) =>
  (
    <td  className={`${alive ? 'alive' : ''} `}>
    </td>
  );
