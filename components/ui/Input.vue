<template>
  <div>
    <label v-if="label">{{ label }} </label>
    <input
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit(`update:modelValue`, $event.target.value)"
    />
  </div>
</template>

<script setup>
const emit = defineEmits([`update:modelValue`]);

const props = defineProps({
  placeholder: {
    type: String,
  },
  label: {
    type: String,
  },
  modelValue: {
    type: String,
    default: "",
  },
});
</script>

<style lang="postcss" scoped>
label {
  @apply block mb-2 text-sm font-normal text-gray-900 dark:text-white;
}

input {
  @apply bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500;
}

input::placeholder {
  @apply text-gray-400 dark:text-gray-500;
}

input[type="text"][disabled] {
  background: #eff1f5;
}

input.error {
  outline-color: red !important;
  border-color: red;
}
</style>
