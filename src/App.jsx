// App.js
import React from 'react';
import Card from './Card';

const App = () => {
  const cards = [
    { title: 'Incomplete', boxes: ["clientName", 'Hello, welcome to the page', 'B', 'U', 15, 25, 'date'] }, // Define your box data here
    { title: 'To-do', boxes: ['clientName', 'Hello, welcome to the page', 'B', 'U', 15, 25, 'date'] },
    { title: 'Doing', boxes: ['clientName', 'Hello, welcome to the page', 'B', 'U', 15, 25, 'date'] },
    { title: 'Under Review', boxes: ['clientName', 'Hello, welcome to the page', 'B', 'U', 15, 25, 'date'] },
    { title: 'Completed', boxes: ['clientName', 'Hello, welcome to the page', 'B', 'U', 15, 25, 'date'] },
    { title: 'Overdue', boxes: ['clientName', 'Hello, welcome to the page', 'B', 'U', 15, 25, 'date'] },
  ];

  return (
    <div className="app">
      {cards.map((card, index) => <Card key={index} {...card} />)}
    </div>
  );
};

export default App;
