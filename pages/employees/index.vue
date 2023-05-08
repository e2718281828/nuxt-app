<template>
  <div>
    <div class="flex justify-end space-x-2 py-4 px-10 bg-white">
      <Button @click="setCreateEmployeeVisibility()" :text="'Создать'"></Button>
    </div>
    <div>
      <Table :tableFields="tableFields" :items="data">
        <template #name="{ data }">
          {{ data.name }}
        </template>
        <template #lastname="{ data }">
          {{ data.lastname }}
        </template>
        <template #experience="{ data }">
          {{ data.experience }}
        </template>
        <template #age="{ data }">
          {{ data.age }}
        </template>
        <template #address="{ data }">
          {{ data.address }}
        </template>
        <template #setButton="{ data }">
          <Button @click="setEditEmployeeVisibility(data.id)" :text="'Edit'" />
        </template>
      </Table>
    </div>
  </div>
  <div>
    <ModalDialog
      :show="isCreateEmployeeVisible"
      :close="setCreateEmployeeVisibility"
    >
      <template #header>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
          Новый сотрудник
        </h3>
      </template>
      <template #body>
        <CreateEmployee
          :data="data"
          :close="setCreateEmployeeVisibility"
        ></CreateEmployee>
      </template>
    </ModalDialog>

    <ModalDialog
      :show="isEditEmployeeVisible"
      :close="setEditEmployeeVisibility"
    >
      <template #header>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
          Изменить данные о сотруднике
        </h3>
      </template>
      <template #body>
        <EditEmployee
          :data="data"
          :close="setEditEmployeeVisibility"
          :id="employeeId"
        ></EditEmployee>
      </template>
    </ModalDialog>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import CreateEmployee from "~~/components/common/employees/CreateEmployee.vue";
import EditEmployee from "~~/components/common/employees/EditEmployee.vue";
import getEmployees from "~/api/employees.js";

const tableFields = reactive([
  {
    key: "name",
    name: "Имя",
  },
  {
    key: "lastname",
    name: "Фамилия",
  },
  {
    key: "experience",
    name: "Стаж (лет)",
  },
  {
    key: "age",
    name: "Возраст",
  },
  {
    key: "address",
    name: "Адрес",
  },
  {
    key: "setButton",
    name: ""
  }
]);

const data = ref([]);

// Загрузка сотрудников при монтировании компонента
async function loadEmployees() {
  data.value = await getEmployees();
}

loadEmployees();

const isEditEmployeeVisible = ref(false);
const isCreateEmployeeVisible = ref(false);
const employeeId = ref("");

const setEditEmployeeVisibility = (id) => {
  isEditEmployeeVisible.value = isEditEmployeeVisible.value ? false : true;
  employeeId.value = id;
};

const setCreateEmployeeVisibility = () => {
  isCreateEmployeeVisible.value = isCreateEmployeeVisible.value ? false : true;
};
</script>
