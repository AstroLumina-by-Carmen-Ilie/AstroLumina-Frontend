import { FormErrors, SelectOption } from './common';

export interface LocationCoordinates {
  lat: number;
  lng: number;
}

export interface ReadingPayload {
  longitude: number;
  latitude: number;
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
}

export interface PlanetPosition {
  planet: string;
  sign: string;
  house: string;
}

export interface ReadingResult {
  data: PlanetPosition[];
}

export type { FormErrors, SelectOption };