export interface User {
  readonly id?: number;
  readonly verified?: boolean;
  email?: string;
  first_name?: string;
  last_name?: string;
  profile_pic?: string;
  profile_pic_big?: string;
  readonly last_login?: string;
  job_title?: string;
  location?: string;
  birthday?: string;
  about?: string;
  public_email?: string;
  public_mobile_phone?: any;
  readonly created_at?: string;
  readonly updated_at?: string;
}
