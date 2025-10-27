<template>
  <DebounceSelect
    mode="multiple"
    v-model:value="value"
    placeholder="Select users"
    :fetch-options="fetchUserList"
    style="width: 100%"
  />
</template>

<script setup lang="ts">
import { h, ref, computed } from 'vue';
import { Select, Spin, Avatar } from 'antd-v';
import { debounce } from 'lodash-es';

interface UserValue {
  label: string;
  value: string;
  avatar?: string;
}

interface DebounceSelectProps extends Record<string, any> {
  fetchOptions: (search: string) => Promise<UserValue[]>;
  debounceTimeout?: number;
  mode?: string;
  value?: UserValue[];
}

const DebounceSelect = (props: DebounceSelectProps) => {
  const fetching = ref(false);
  const options = ref<UserValue[]>([]);
  const fetchRef = ref(0);

  const debounceFetcher = () => {
    const loadOptions = (value: string) => {
      fetchRef.value += 1;
      const fetchId = fetchRef.value;
      options.value = [];
      fetching.value = true;

      props.fetchOptions(value).then((newOptions) => {
        if (fetchId !== fetchRef.value) {
          return;
        }

        options.value = newOptions;
        fetching.value = false;
      });
    };

    return debounce(loadOptions, props.debounceTimeout || 300);
  };

  return h(Select, {
    ...props,
    labelInValue: true,
    showSearch: { filterOption: false, onSearch: debounceFetcher },
    notFoundContent: fetching.value
      ? h(Spin, { size: 'small' })
      : 'No results found',
    options: options.value,
    optionRender: (option: any) =>
      h('div', { style: { display: 'flex', alignItems: 'center' } }, [
        option.data.avatar &&
          h(Avatar, { src: option.data.avatar, style: { marginRight: 8 } }),
        option.label,
      ]),
  });
};

async function fetchUserList(username: string): Promise<UserValue[]> {
  console.log('fetching user', username);
  return fetch(
    `https://660d2bd96ddfa2943b33731c.mockapi.io/api/users/?search=${username}`,
  )
    .then((res) => res.json())
    .then((res) => {
      const results = Array.isArray(res) ? res : [];
      return results.map((user) => ({
        label: user.name,
        value: user.id,
        avatar: user.avatar,
      }));
    });
}

const value = ref<UserValue[]>([]);
</script>
