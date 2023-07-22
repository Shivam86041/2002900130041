// src/pages/AllTrains.js

import React, { useEffect, useState } from 'react';
import TrainCard from '../Components/TrainCard';
import { getAllTrains } from '../Services/api';

const AllTrains = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    // Fetch train schedule data and set it to state
    getAllTrains().then((data) => setTrains(data));
  }, []);

  // Apply filtering and sorting logic here (not provided in this response)

  return (
    <div>
      <h1>All Trains Schedule</h1>
      {trains.map((train) => (
        <TrainCard key={train.trainNumber} train={train} />
      ))}
    </div>
  );
};

export default AllTrains;
