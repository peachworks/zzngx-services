export interface Role {
  id: number;
  name: string;
  description: string;
  is_location_role: boolean;
  is_default_role: boolean;
  is_admin_role: boolean;
  permissions: number[];
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by: number;
}
