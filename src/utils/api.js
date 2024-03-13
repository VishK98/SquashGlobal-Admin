import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/';

const handleResponse = (response) => {
    if (response.status !== 200) {
        throw new Error('Network response was not ok.');
    }
    return response.data;
};

export const getAllEnquiry = async () => {
    try {
        const requestOptions = {
            method: 'get',
            url: `${BASE_URL}allContactUs`,
        };

        const response = await axios(requestOptions);
        return handleResponse(response);
    } catch (error) {
        throw new Error('Error getting all enquiries.');
    }
};

export const loginResponse = async (formData) => {
    try {
      const response = await axios.post(`${BASE_URL}login`, formData);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error logging in:', error.response.data);
      throw error;
    }
  };
  
