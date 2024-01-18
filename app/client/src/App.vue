<script setup lang="ts">
import { computed, ref } from "vue";
import { Card } from "./components/index";
import { Item } from "./types";

const items = ref<Item[]>([
  {
    id: 1,
    name: "アボカドディップバケット",
    description:
      "刻んだ野菜をアボカドと混ぜてディップに。こんがり焼いたバゲットとお召し上がりください。",
    price: 480,
    image: "/images/item1.jpg",
    soldout: false,
    selected: false,
    link: "https://handson.vuejs-jp.org/",
  },
  {
    id: 2,
    name: "あの日夢見たホットケーキ",
    description:
      "子供のころに食べたかった、あのホットケーキを再現しました。素朴でどこか懐かしい味をどうぞ。",
    price: 1180,
    image: "/images/item2.jpg",
    soldout: false,
    selected: false,
  },
  {
    id: 3,
    name: "HOP WTR",
    description:
      "ロサンゼルス生まれのスパークリングウォーター。ノンカロリー、ノンアルコールの新感覚飲料です。",
    price: 320,
    image: "/images/item3.jpg",
    soldout: true,
    selected: false,
  },
  {
    id: 4,
    name: "チーズフレンチフライ",
    description:
      "イタリア産チーズをたっぷりかけたアツアツのフレンチフライ。みんな大好きな一品です。",
    price: 670,
    image: "/images/item4.jpg",
    soldout: false,
    selected: false,
  },
]);

const stockQuantityComputed = computed(
  () => items.value.filter((v) => !v.soldout).length
);

const stockItem = (item: Item) => {
  item.soldout = false;
};
const changesSoldout = (item: Item) => {
  item.soldout = true;
};
</script>

<template>
  <header class="header">
    <img src="/images/logo.svg" alt="" />
    <h1>Vue.js ハンズオン</h1>
  </header>
  <div>商品数: {{ stockQuantityComputed }}</div>
  <main class="main">
    <template v-for="item in items" :key="item.id">
      <div
        v-if="!item.soldout"
        class="item"
        :class="{ 'selected-item': item.selected }"
        @keyup.enter="item.selected = !item.selected"
        @click="item.selected = !item.selected"
        tabindex="0"
      >
        <Card :item="item" @changes-soldout="changesSoldout">
          <template #body>
            <p>{{ item.description }}</p>
            <a v-if="item.link" :href="item.link">リンク</a>
          </template>
        </Card>
      </div>
      <div v-else>
        売り切れです<button type="button" @click="stockItem(item)">入荷</button>
      </div>
    </template>
  </main>
</template>

<style scoped lang="postcss">
.header {
  display: flex;
  align-items: center;
  align-content: center;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;

  & img {
    margin-right: 1rem;
  }

  & h1 {
    font-size: 5rem;
    line-height: 5rem;
    margin: 0;
  }
}
.main {
  display: grid;
  grid-template-columns: 3fr 3fr 3fr 3fr;
  gap: 1.5rem;

  & .item {
    padding: 0.5rem;
    cursor: pointer;

    &:hover {
      transition: 0.2s transform ease-out;
      transform: scale(1.05);
    }
  }
  .selected-item {
    background-color: #e3f2fd;
  }
}
</style>
