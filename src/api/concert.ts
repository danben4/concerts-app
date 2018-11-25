import { IConcertEntity } from '../models/concertEntity';

const baseURL = 'http://apis.is';

const fetchConcertsAsync = (): Promise<IConcertEntity[]> => {
  const concertsURL = `${baseURL}/concerts`;
  return fetch(concertsURL)
    .then((response) => (response.json()))
    .then(json => mapToConcerts(json.results));
};

const mapToConcerts = (concerts: any[]): IConcertEntity[] => {
  return concerts.map(mapToConcert);
};

const mapToConcert = (concert: any): IConcertEntity => {
  return {
    dateOfShow: concert.dateOfShow,
    eventDateName: concert.eventDateName,
    eventHallName: concert.eventHallName,
    imageSource: concert.imageSource,
    name: concert.name,
    userGroupName: concert.userGroupName,
  };
};

export const concertAPI = {
  fetchConcertsAsync,
};