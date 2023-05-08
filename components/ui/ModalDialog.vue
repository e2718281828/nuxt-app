<template>
  <div v-if="props.show" class="modal" :class="`z-${zIndex}`">
    <div class="relative p-4 w-full h-full md:h-auto m-auto">
      <div
        ref="modal"
        class="relative bg-white rounded-lg shadow dark:bg-gray-700"
      >
        <div
          class="flex justify-between items-start p-4 pl-6 rounded-t border-b dark:border-gray-600"
        >
          <slot name="header"></slot>

          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            @click.stop="props.close"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div class="p-6 space-y-6">
          <slot name="body"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  close: Function,
  zIndex: {
    type: String,
    default: "100",
  },
  key: {
    type: String,
  },
});

const modal = ref(null);

// добавляем и убираем видимость модального окна
watch(
  () => props.show,
  (show) => {
    show
      ? document.body.classList.add("overflow-y-hidden")
      : document.body.classList.remove("overflow-y-hidden");
  }
);
</script>

<style lang="postcss" scoped>
.modal {
  @apply overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 w-full md:inset-0 md:h-full bg-gray-500/70 dark:bg-gray-900/70 justify-center items-center flex;
}
</style>
