import { FormErrors, SelectOption } from './common';
import { LocationCoordinates, ReadingPayload, PlanetPosition, ReadingResult } from './planetPositions';

export interface UserInfo {
    name: string;
    birthDate: Date;
    birthHour: Date;
    location: string;
}

export interface ContactInfo {
    phone: string;
    email: string;
}

export interface InterpretedPlanetPosition {
    planet: string;
    sign: string;
    house: string;
    interpretation: string;
  }
  
export interface InterpretedReadingResult {
data: InterpretedPlanetPosition[];
}

export type { FormErrors, SelectOption };
export type { LocationCoordinates, ReadingPayload, PlanetPosition, ReadingResult};
