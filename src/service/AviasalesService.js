import axios from 'axios';

export default class AviasalesService {
  constructor() {
    this.BASE_URL = 'https://aviasales-test-api.kata.academy';
    this.searchId = null;
  }

  async getTickets(searchId) {
    const url = new URL('/tickets', this.BASE_URL);
    url.searchParams.set('searchId', searchId);

    const response = await axios.get(url.toString());
    return response.data;
  }

  async getSearchId() {
    const url = new URL('/search', this.BASE_URL);

    if (this.searchId === null) {
      const response = await axios.get(url.toString());
      this.searchId = response.data.searchId;
    }
    return this.searchId;
  }
}
