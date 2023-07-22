// src/pages/SingleTrain.js

import React, { useEffect, useState } from 'react';
import TrainCard from '../Components/TrainCard';
import { getSingleTrain } from '../Services/api';

const SingleTrain = ({ match }) => {
  const [train, setTrain] = useState(null);

  useEffect(() => {
    // Fetch train details for the specific train based on the URL parameter
    getSingleTrain(match.params.trainNumber).then((data) => setTrain(data));
  }, [match.params.trainNumber]);

  if (!train) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Train Details</h1>
      <TrainCard train={train} />
    </div>
  );
};

export default SingleTrain;
