/**
 * Created by vadim on 06.02.2017.
 */
import React from 'react';

export default ({alive}) =>
  (
    <td  className={`${alive ? 'alive' : ''} `}>
    </td>
  );
