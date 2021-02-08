export default {
  GET_SEARCH({ state }, search) {    
    axios_api.get(`/api/items?q=${search}`).then((response) => {
      state.results = response.data;
      state.breadcrumb = response.data.breadcrumb;
      state.firstCategory = response.data.results.categories[0];
      return response;
    });
  },
  GET_ITEM({ state }, id) {   
    axios_api.get(`/api/items/${id}`).then((response) => {
      state.item = response.data.item;
      return response;
    });
  }
}