/* Data transfer object */
export type Employee = {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string;
  birthDate: string;
  phone: string;
}

export type WorkLog = {
  id: number;
  employee_id: number;
  from: string;
  to: string;
}