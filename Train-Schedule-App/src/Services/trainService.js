import axios from 'axios';

const BASE_URL = 'http://20.244.56.144:80/train/trains';

// Register your company with John Doe Railways and get client credentials
const registerCompany = async (registrationData) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, registrationData);
    return response.data;
  } catch (error) {
    console.error('Error registering company:', error);
    return null;
  }
};

// Get the authorization token using client credentials
const getAuthorizationToken = async (authorizationData) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth`, authorizationData);
    return response.data.access_token;
  } catch (error) {
    console.error('Error getting authorization token:', error);
    return null;
  }
};

// Fetch all trains data using the authorization token
const fetchAllTrains = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/trains`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching all trains:', error);
    return [];
  }
};

// Fetch data of a specific train using the authorization token
const fetchSingleTrain = async (trainNumber, token) => {
  try {
    const response = await axios.get(`${BASE_URL}/trains/${trainNumber}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching single train:', error);
    return null;
  }
};

export { registerCompany, getAuthorizationToken, fetchAllTrains, fetchSingleTrain };
