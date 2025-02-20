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

export type { FormErrors, SelectOption };
export type { LocationCoordinates, ReadingPayload, PlanetPosition, ReadingResult };
