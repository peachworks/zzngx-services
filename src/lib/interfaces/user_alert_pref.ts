export interface UserAlertPref {
    readonly id?: number;
    alert_id?: number;
    is_web?: boolean;
    is_email?: boolean;
    is_sms?: boolean;
    readonly created_at?: string;
    readonly created_by?: number;
    readonly updated_at?: string;
    readonly updated_by?: number;
}
