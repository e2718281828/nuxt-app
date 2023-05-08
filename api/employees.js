import axios from 'axios'

export default async function getEmployees() {
  try {
    const response = await axios.get("http://localhost:3100/employees");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export const createEmployee = async (employee) => {
  const response = await axios.post('http://localhost:3100/employees', employee)
  return response.data
}

export const updateEmployee = async (id, employee) => {
  const response = await axios.put(`http://localhost:3100/employees/${id}`, employee)
  return response.data
}