export interface User {
  id: number;
  verified: boolean;
  email: string;
  first_name: string;
  last_name: string;
  profile_pic: string;
  profile_pic_big: string;
  last_login: string;
  job_title?: any;
  location?: any;
  birthday?: any;
  about?: any;
  public_email?: any;
  public_mobile_phone?: any;
  created_at: string;
  updated_at: string;
}
