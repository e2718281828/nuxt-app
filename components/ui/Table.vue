<template>
  <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th
            v-for="item in tableFields"
            :key="item.name"
            scope="col"
            class="px-6 py-3"
          >
            {{ item.name }}
          </th>
        </tr>
      </thead>
      <tbody v-if="Object.keys(items)?.length">
        <tr
          v-for="(i, index) in items"
          :key="index"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <td class="py-4 px-6" v-for="j in tableFields" :key="j.key">
            <slot :name="j.key" :data="i" :index="index"></slot>
          </td>
          <td>
            <slot name="additionalElements" :data="i.id"></slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const props = defineProps({
  tableFields: {
    type: Array,
  },
  items: {
    type: Array,
  },
});
</script>
