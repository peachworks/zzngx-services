export interface Location {
  id: number;
  name: string;
  merchant_id: number;
  number: string;
  timezone: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  state_id: string;
  country: string;
  country_id: string;
  zip: string;
  phone: string;
  tags: string[];
  org_group_id?: any;
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by: number;
}
