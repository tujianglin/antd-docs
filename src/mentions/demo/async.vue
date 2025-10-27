<template>
  <Mentions
    style="width: 100%"
    :loading="loading"
    :options="
      users.map(({ login, avatar_url: avatar }) => ({
        key: login,
        value: login,
        className: 'antd-demo-dynamic-option',
        label: () =>
          h('span', {}, [
            h('img', { draggable: false, src: avatar, alt: login }),
            h('span', {}, login),
          ]),
      }))
    "
  />
</template>

<script setup lang="ts">
import { h, ref } from 'vue';
import { Mentions } from 'antd-v';
import debounce from 'lodash-es';

const loading = ref(false);
const users = ref<{ login: string; avatar_url: string }[]>([]);
const domRef = ref<string | null>(null);

const loadGithubUsers = (key: string) => {
  if (!key) {
    users.value = [];
    return;
  }

  fetch(`https://api.github.com/search/users?q=${key}`)
    .then((res) => res.json())
    .then(({ items = [] }) => {
      if (domRef.value !== key) return;

      loading.value = false;
      users.value = items.slice(0, 10);
    });
};

const debounceLoadGithubUsers = debounce(loadGithubUsers, 800);

const onSearch = (search: string) => {
  domRef.value = search;
  loading.value = !!search;
  users.value = [];

  debounceLoadGithubUsers(search);
};
</script>
