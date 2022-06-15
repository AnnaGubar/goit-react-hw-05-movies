import axios from 'axios';

const KEY = '9cTjAjlRB53wyhAFk5VzXcBu5GiPU6fK';
axios.defaults.baseURL = 'https://app.ticketmaster.com/discovery/v2/';

export async function fetchEvents() {
  const response = await axios.get(`events?size=20&apikey=${KEY}`);
  return response.data._embedded.events;
}

export async function fetchEventById(id) {
  const response = await axios.get(`events/${id}?apikey=${KEY}`);
  return response.data;
}
