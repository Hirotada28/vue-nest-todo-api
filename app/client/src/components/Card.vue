<script setup lang="ts">
import { Item } from "../types";

const props = defineProps<{
  item: Item;
}>();
const emit = defineEmits(["changes-soldout"]);
const pricePrefix = (price: number): string => {
  return price.toLocaleString();
};
</script>

<template>
  <div class="thumbnail">
    <img :src="props.item.image" alt="" />
  </div>
  <div class="dicription">
    <h2>{{ props.item.name }}</h2>
    <slot name="body" />
    <div class="card-footer">
      <span
        >¥<span class="price">{{ pricePrefix(props.item.price) }}</span></span
      >
      <button type="button" @click="() => emit('changes-soldout', props.item)">
        売り切れ
      </button>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.thumbnail > img {
  width: 100%;
  height: calc(100%);
  object-fit: cover;
}

.dicription {
  & h2 {
    line-height: 4rem;
  }
  & p {
    font-size: 1.2rem;
    line-height: 2rem;
  }

  & .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: end;

    & > span {
      display: block;
      margin-top: 0.5rem;
      font-size: 1.1rem;

      & .price {
        font-size: 2rem;
        font-weight: bold;
      }
    }
  }
}
</style>
