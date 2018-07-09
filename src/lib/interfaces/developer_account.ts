export interface DeveloperAccount {
  id: number;
  company_name: string;
  owned_by: number;
  website: string;
  namespace: string;
  address1: string;
  address2?: any;
  city: string;
  state: string;
  zip: string;
  country: string;
  phone: string;
  week_start_time: string;
  week_start_day: number;
  created_at: string;
  updated_at: string;
  apps: App[];
}

export interface App {
  name: string;
  is_engine_app: boolean;
  icon: string;
  status: string;
  version: string;
}
