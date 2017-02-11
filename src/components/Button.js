/**
 * Created by vadim on 07.02.2017.
 */
import React from 'react';

export default ({title, handleClick}) => (
  <span onClick={handleClick} className="button">
     {title}
  </span>
)
