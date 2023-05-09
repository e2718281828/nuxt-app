<template>
  <div>
    <MainFormEmployee :form="form"></MainFormEmployee>
  </div>
  <div class="flex justify-end">
    <Button text="Сохранить" @click="saveEmployee" />
  </div>
</template>
<script setup>
import MainFormEmployee from "./MainFormEmployee.vue";
import updateEmployee from "~/api/employees.js";

const props = defineProps({
  data: Object,
  close: Function,
  id: String,
});

const form = reactive({
  id: props.data[props.id].id,
  name: props.data[props.id].name,
  lastname: props.data[props.id].lastname,
  experience: props.data[props.id].experience,
  age: props.data[props.id].age,
  address: props.data[props.id].address,
});

const saveEmployee = async () => {
  try {
    await updateEmployee(form.id, form);
    props.data[props.id] = form;
    props.close(); // закрытие формы
  } catch (error) {
    console.error(error);
  }
};
</script>
