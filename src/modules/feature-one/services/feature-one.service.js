import { fetchData } from "@/utils/api/http-client";

/**
 * Fetches feature one data from the API.
 *
 * @param {string} serviceUrl - The API endpoint.
 * @returns {Promise<Object>} - The response data.
 * @throws {Error} - If there is an error fetching the data.
 */
export const getFeatureOne = async (serviceUrl) => {
  try {
    const response = await fetchData(serviceUrl);
    return response;
  } catch (error) {
    console.error('Error fetching feature one:', error);
    throw error;
  }
};