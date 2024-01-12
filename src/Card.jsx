import React from 'react';
import Box from './Box';

const Card = ({ title, boxes }) => (
  <div className="card">
    <h2>{title}</h2>
    {boxes.map((box, index) => <Box key={index} {...box} />)}
  </div>
);

export default Card;