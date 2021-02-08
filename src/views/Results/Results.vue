<template>
  <section
    id="results"
    class="results"
  >
    <search />
    <div class="container pb-4">
      <div class="results__beardcrumb">
        <!-- NOTE: It is not clear how to build the breadcrumb and the screenshots are blurry -->
        <ul class="list-group d-flex flex-row justify-content-start p-4">
          <li v-if="results.categories.length > 0">
            {{ results.categories[0] }}
          </li>
          <template
            v-if="results.breadcrumb.length > 0"
          >
            <li 
              v-for="(item, idx) in results.breadcrumb"
              :key="idx"
            >
              {{ item }}
            </li>
          </template>
        </ul>
      </div>
      <div class="bg-white d-flex align-items-center flex-column pr-3 mb-4">
        <div
          v-for="(item, idx) in results.items.slice(0, 4)"
          :key="idx"
          class="w-100"
        >
          <router-link
            :id="`item-${item.id}`"
            :to="`/items/${item.id}`"
            class="results__item d-flex justify-content-between align-items-start flex-row w-100 my-2 py-2"
          >
            <div class="results__item--left d-flex align-items-start">
              <img
                :src="item.picture"
                :alt="item.title"
              >
              <div class="p-3 text">
                <strong>$ {{ Math.round(item.price.amount ) | currency }}</strong>
                <h2>
                  {{ item.title }}
                </h2>
              </div>
            </div>
            <div class="results__item--right">
              <!-- NOTE: This content is not understood in the capture -->
              <p>{{ item.price.currency }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState,} from 'vuex';
import Search from '../Search/search.vue';

  export default {
      name: 'Results',
      components: {
        Search,
      },
      computed: {
        ...mapState({
        results: 'results'
      }),
    },     
    created() {
        document.title = 'Resultados de la busqueda';
    }
  }
</script>

<style lang="scss" scoped>
  .results__beardcrumb {
    ul {
      font-size: 14px;
      list-style: none;
      li {
        position: relative;
        padding-right: .5rem;
        margin: 0 1rem;
        &:after {
          content: ">";
          display: block;
          position: absolute;
          right: -1rem;
          top: 0;
        }
        &:last-child {
          &::after {
            content: none;
          }
        }
      }
    }
  }
  .results__item {
    min-height: 220px;
    &--left {
      text-align: left;
      img {
        float: left;
        width: 200px;
        height: 200px;
        object-fit: cover;
      }
      strong {
        font-size: 26px;
      }
      h2 {
        font-size: 24px;
        padding: 1rem 0;
      }
      .text {
        color: black;
      }
    }
    &--right {
      color: black;
    }
  }
</style>