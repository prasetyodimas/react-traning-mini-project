import axios from 'axios';
const VITE_API_URL = import.meta.env?.VITE_API_URL;

const apiService = axios.create({
  baseURL: VITE_API_URL, 
  headers: {
    'Content-Type': 'application/json',
  }
});

/**
 * Fetches data from the API endpoint.
 *
 * @param {string} endpoint The API endpoint.
 * @param {Object} [params={}] The query parameters to send with the request.
 * @returns {Promise<Object>} The response data.
 * @throws {Error} If there is an error fetching the data.
*/
export const fetchData = async (endpoint, params = {}) => {
  try {
    const response = await apiService.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

/**
 * Sends data to the API endpoint using a POST request.
 *
 * @param {string} endpoint The API endpoint.
 * @param {Object} data The data to send in the request body.
 * @returns {Promise<Object>} The response data.
 * @throws {Error} If there is an error posting the data.
*/

export const postData = async (endpoint, data) => {
  try {
    const response = await apiService.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};

/**
 * Sends data to the API endpoint using a PUT request.
 *
 * @param {string} endpoint The API endpoint.
 * @param {Object} data The data to send in the request body.
 * @returns {Promise<Object>} The response data.
 * @throws {Error} If there is an error putting the data.
*/

export const putData = async (endpoint, data) => {
  try {
    const response = await apiService.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error putting data:', error);
    throw error;
  }
};

/**
 * Sends a DELETE request to the API endpoint.
 *
 * @param {string} endpoint The API endpoint.
 * @returns {Promise<Object>} The response data.
 * @throws {Error} If there is an error deleting the data.
*/

export const deleteData = async (endpoint) => {
  try {
    const response = await apiService.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error;
  }
};