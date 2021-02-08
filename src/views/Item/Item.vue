<template>
  <section id="item">
    <search />
    <div class="container">
      <div class="item__beardcrumb">
        <!-- NOTE: It is not clear how to build the breadcrumb and the screenshots are blurry -->
        <ul class="list-group d-flex flex-row justify-content-start p-4">
          <li v-if="firstCategory.length > 0">
            {{ firstCategory[0] }}
          </li>
          <template
            v-if="breadcrumb.length > 0"
          >
            <li 
              v-for="(item, idx) in breadcrumb"
              :key="idx"
            >
              {{ item }}
            </li>
          </template>
        </ul>
      </div>
      <div class="item__container p-4">
        <div class="item__container--details d-flex justify-content-between align-items-start">
          <img
            :src="item.picture ? item.picture : ''"
            :alt="item.title ? item.title : ''"
          >
          <div class="item__container--details-text">
            <span v-if="item.condition">{{ item.condition }}</span>
            <h2 v-if="item.title">
              {{ item.title }}
            </h2>
            <strong v-if="item.price.amount">$ {{ item.price.amount | currency }} </strong>
            <button
              type="button"
              class="btn btn-primary d-block w-100 my-2"
            >
              Comprar
            </button>
          </div>
        </div>
        <div class="item__container--description">
          <h3 class="my-4 pt-4 pb-2">Descripción del producto</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState,} from 'vuex';
import Search from '../Search/search.vue';
    export default {
        name: 'Item',
        components: {
          Search,
        },
        created() {
          document.title = 'Detalle del producto';
          this.getItem(this.$route.params.id);
        },
        computed: {
          ...mapState({
          item: 'item',
          firstCategory: 'firstCategory',
          breadcrumb: 'breadcrumb'
        }),
      },
      methods: {
        getItem(id) {
          this.$store.dispatch('GET_ITEM', id);
        }
      }
    }
</script>
<style lang="scss" scoped>
  .item__beardcrumb {
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
  .item__container {
    background: #ffffff;
    &--details {
    img {
        width: 55%;
      }
      &-text {
        max-width: 220px;
        text-align: left;
        h2 {
          font-size: 24px;
          font-weight: bold;
          margin-top: 1rem;
        }
        strong {
          font-size: 28px;
        }
      }
    }
    &--description {
      text-align: left;
      margin: 2rem 0;
    }
  }
</style>