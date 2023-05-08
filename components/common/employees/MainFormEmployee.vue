<template>
  <div class="flex flex-col space-y-8 dark:text-white">
    <div class="text-base font-semibold">Основная информация</div>
    <div
      class="flex flex-col sm:flex-row space-x-0 sm:space-x-2 space-y-2 sm:space-y-0"
    >
      <Input
        label="Имя"
        placeholder="Иван"
        class="w-full"
        v-model="props.form.name"
      />
      <Input
        label="Фамилия"
        placeholder="Иванов"
        class="w-full"
        v-model="props.form.lastname"
      />
      <Input label="Стаж" class="w-full" v-model="props.form.experience" />
      <Input label="Возраст" class="w-full" v-model="props.form.age" />
      <Input label="Адрес" class="w-full" v-model="props.form.address" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  form: Object,
});
</script>
