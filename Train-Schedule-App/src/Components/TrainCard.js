// src/components/TrainCard.js

import React from 'react';

const TrainCard = ({ train }) => {
  return (
    <div>
      <h2>{train.trainName}</h2>
      <p>Train Number: {train.trainNumber}</p>
      <p>Departure Time: {train.departureTime.Hours}:{train.departureTime.Minutes}</p>
      <p>Delay: {train.delayedBy} minutes</p>
      <p>Sleeper Seats Available: {train.seatsAvailable.sleeper}</p>
      <p>AC Seats Available: {train.seatsAvailable.AC}</p>
      <p>Sleeper Price: {train.price.sleeper}</p>
      <p>AC Price: {train.price.AC}</p>
    </div>
  );
};

export default TrainCard;
