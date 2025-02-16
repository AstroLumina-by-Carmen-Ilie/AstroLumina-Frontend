import axios from 'axios';
import { ReadingPayload, ReadingResult } from '../../../types/planetPositions';

export const fetchReading = async (language: string, payload: ReadingPayload): Promise<ReadingResult> => {
  try {
    const response = await axios.post(`https://api-astrolumina.onrender.com/api/v1/${language}/planet-sign-house`, payload, {
      headers: {
        'Content-Type': 'application/json'
      },
    });
    console.log('API Response:', response.data);
    return {
      dynamicTexts: response.data.dynamicTexts.map((p: any) => ({
        planet: p.planet,
        sign: p.sign,
        house: p.house
      }))
    };
  } catch (error) {
    console.error('API request error:', error);
    throw new Error('Failed to fetch reading');
  }
};

export const calculateSouthNode = (northNodeSign: string, northNodeHouse: string) => {
  const signs = [
    'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
    'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
  ];
  const houses = ['House 1', 'House 2', 'House 3', 'House 4', 'House 5', 'House 6', 
                 'House 7', 'House 8', 'House 9', 'House 10', 'House 11', 'House 12'];
  
  const northNodeSignIndex = signs.indexOf(northNodeSign);
  const northNodeHouseIndex = houses.indexOf(northNodeHouse);
  
  return {
    sign: signs[(northNodeSignIndex + 6) % 12],
    house: houses[(northNodeHouseIndex + 6) % 12]
  };
};
