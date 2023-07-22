import React, { useState } from 'react';
import axios from 'axios';

const NumberManagementApp = () => {
  const [numbers, setNumbers] = useState([]);

  const handleFetchNumbers = async () => {
    try {
      const urls = [
        'http://20.244.56.144/numbers/primes',
        'http://20.244.56.144/numbers/fibo',
        'http://20.244.56.144/numbers/odd',
        'http://20.244.56.144/numbers/rand'
      ];

      const promises = urls.map(async (url) => {
        try {
          const response = await axios.get(url, { timeout: 500 });
          return response.data.numbers;
        } catch (error) {
          return [];
        }
      });

      const responses = await Promise.all(promises);
      const mergedNumbers = Array.from(new Set(responses.flat()));
      setNumbers(mergedNumbers.sort((a, b) => a - b));
    } catch (error) {
      console.error('Error fetching numbers:', error);
    }
  };

  return (
    <div>
      <button onClick={handleFetchNumbers}>Fetch Numbers</button>
      {numbers.length > 0 && (
        <div>
          <h3>Unique Numbers:</h3>
          <ul>
            {numbers.map((num) => (
              <li key={num}>{num}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NumberManagementApp;
