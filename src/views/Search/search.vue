<template>
  <section
    id="search"
    class="container__search"
  >
    <div class="container d-flex justify-content-between align-items-center py-3">
      <img
        src="../../assets/Logo_ML.png"
        alt="Mercado libre CO"
      >
      <form class="form-inline flex-grow-1 p-relative pl-4">
        <input
          id="input-search-results"
          v-model="search"
          class="container__search--input form-control mr-sm-2"
          type="text"
          placeholder="Buscar..."
          aria-label="Search"
          @keyup.enter.prevent="submitSearch(search)"
        >
        <b-icon-search
          id="btn-search-results"
          class="container__search--icon"
          @click="submitSearch(search)"
        />
      </form>
    </div>
  </section>
</template>

<script>
    export default {
        name: 'Search',
        data() {
            return {
                search: ''
            }
        },
        methods: {
            // Method to send form data to endpoint
            submitSearch(search) {
                if (search !== '') {
                  this.$store.dispatch('GET_SEARCH', search).then(() => {
                    // Send url params
                   this.$router.push({ path: 'items', query: { search: search }});
                  });
                }
            }
        }
    }
</script>


 <style lang="scss">
    .container__search {
        background: #fee600;
        .form-inline {
            position: relative;
            .container__search--input.form-control{
                width: 100%;
            }
        }
      &--icon {
        position: absolute;
        right: 2rem;   
      }
    }

</style>