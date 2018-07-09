export interface Employee {
  id: number;
  first_name: string;
  last_name: string;
  user_id: number;
  employer_number: string;
  email: string;
  home_phone: string;
  mobile_phone: string;
  address: string;
  city: string;
  state: string;
  state_id: number;
  zip: string;
  country: string;
  country_id: number;
  job_title: string;
  birth_date: string;
  hire_date: string;
  termination_date?: any;
  is_active: boolean;
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by: number;
}
