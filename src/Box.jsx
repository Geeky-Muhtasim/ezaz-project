import React from 'react';

const Box = ({ clientName, sentence, taskIcon, userIcon, chatCount, attachmentCount, date }) => (
  <div className="box">
    <div>{clientName}</div>
    <div>
      <span>{sentence}</span>
      <span>{taskIcon}</span>
    </div>
    <div>
      <span>{userIcon}</span>
      <span>{chatCount}</span>
      <span>{attachmentCount}</span>
      <span>{date}</span>
    </div>
  </div>
);

export default Box;