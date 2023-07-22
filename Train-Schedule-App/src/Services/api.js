// src/services/api.js

import axios from 'axios';

const BASE_URL = 'http://20.244.56.144';

export const registerCompany = async (companyData) => {
  try {
    const response = await axios.post(`${BASE_URL}/train/register`, companyData);
    return response.data;
  } catch (error) {
    throw new Error('Company registration failed.');
  }
};

export const getAuthToken = async (companyData) => {
  try {
    const response = await axios.post(`${BASE_URL}/train/auth`, companyData);
    return response.data.access_token;
  } catch (error) {
    throw new Error('Authorization failed.');
  }
};

export const getAllTrains = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/train/trains`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch train data.');
  }
};

export const getSingleTrain = async (trainNumber, token) => {
  try {
    const response = await axios.get(`${BASE_URL}/train/trains/${trainNumber}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch train details.');
  }
};
