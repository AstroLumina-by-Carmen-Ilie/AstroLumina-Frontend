import axios from 'axios';
import { ReadingPayload, ReadingResult } from '../../../types/planetPositions';

const ASTROLOGICAL_API_URL = import.meta.env.VITE_ASTROLOGICAL_API_URL
export const fetchReading = async (language: string, payload: ReadingPayload): Promise<ReadingResult> => {
  try {
    const response = await axios.post(`${ASTROLOGICAL_API_URL}/api/v1/${language}/planet-sign-house`, payload, {
      headers: {
        'Content-Type': 'application/json'
      },
    });
    console.log('API Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('API request error:', error);
    throw new Error('Failed to fetch reading');
  }
};
