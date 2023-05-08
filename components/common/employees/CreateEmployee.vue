<template>
  <div>
    <MainFormEmployee :form="form"></MainFormEmployee>
  </div>
  <div class="flex justify-end">
    <Button text="Сохранить" @click="createNewEmployee()" />
  </div>
</template>
<script setup>
import MainFormEmployee from "./MainFormEmployee.vue";
import createEmployee from "~/api/employees.js";
import { ref, reactive } from "vue";

const props = defineProps({
  data: Object,
  close: Function,
});

const form = reactive({
  id: props.data.length,
  name: "",
  lastname: "",
  experience: "",
  age: "",
  address: "",
});

const createNewEmployee = async () => {
  try {
    const newEmployee = {
      id: form.id,
      name: form.name,
      lastname: form.lastname,
      experience: form.experience,
      age: form.age,
      address: form.address,
    };
    await createEmployee(newEmployee);
    props.data.push(newEmployee);
    // Сбросить форму
    form.name = "";
    form.lastname = "";
    form.experience = "";
    form.age = "";
    form.address = "";
  } catch (error) {
    console.error(error);
  }
  props.close()
};
</script>
