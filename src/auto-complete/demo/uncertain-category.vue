<template>
  <AutoComplete
    :popup-match-select-width="252"
    :style="{ width: '300px' }"
    :options="options"
    @select="onSelect"
  >
    <Input.Search
      size="large"
      placeholder="input here"
      :enter-button="true"
      @search="handleSearch"
    />
  </AutoComplete>
</template>

<script setup lang="ts">
import { ref, h } from 'vue';
import { AutoComplete, Input } from 'antd-v';

const getRandomInt = (max: number, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const searchResult = (query: string) =>
  Array.from({ length: getRandomInt(5) })
    .join('.')
    .split('.')
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: h(
          'div',
          { style: { display: 'flex', justifyContent: 'space-between' } },
          [
            h('span', [
              'Found ',
              query,
              ' on ',
              h(
                'a',
                {
                  href: `https://s.taobao.com/search?q=${query}`,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                },
                category,
              ),
            ]),
            h('span', `${getRandomInt(200, 100)} results`),
          ],
        ),
      };
    });

const options = ref<any[]>([]);

const handleSearch = (value: string) => {
  options.value = value ? searchResult(value) : [];
};

const onSelect = (value: string) => {
  console.log('onSelect', value);
};
</script>
