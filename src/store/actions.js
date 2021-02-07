export default {
  // eslint-disable-next-line no-unused-vars
  GET_SEARCH({ state }, search) {    
    axios_api.get(`/api/items?q=${search}`).then((response) => {
      state.results = response.data;
      return response;
    });
  }
}